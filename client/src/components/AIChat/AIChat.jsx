import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const knowledgeBase = [
  { keywords: ['timing', 'hours', 'open', 'close', 'time'], answer: "Our store is open Monday through Saturday from 10:00 AM to 8:00 PM." },
  { keywords: ['address', 'location', 'where', 'place'], answer: "We are located Opposite Rela Hospital, CLC Works Road, Chrompet, Chennai, Tamil Nadu." },
  { keywords: ['contact', 'phone', 'number', 'call'], answer: "You can reach us directly at 08056095445." },
  { keywords: ['medical', 'mbbs', 'anatomy', 'surgery'], answer: "We stock a full range of MBBS textbooks including Anatomy, Physiology, Pathology, and Surgery." },
  { keywords: ['nursing', 'bsc', 'gnm'], answer: "We offer B.Sc Nursing, GNM, and Diploma Nursing educational materials." },
  { keywords: ['pharmacy', 'dpharm', 'bpharm'], answer: "We carry D.Pharm, B.Pharm, Pharmacology, and chemistry reference materials." },
  { keywords: ['stationery', 'record', 'pen', 'calculator', 'lab'], answer: "Yes, we sell lab manuals, record books, calculators, pens, and files." },
  { keywords: ['map', 'direction', 'google map'], answer: "You can find us on Google Maps by searching for 'Chennai Medical Book Centre, Chrompet'." },
  { keywords: ['whatsapp'], answer: "Chat with us directly on WhatsApp at +91 8056095445!" }
];

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am your AI Assistant. How can I help you find medical books or stationery today?", isAi: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [collectingLead, setCollectingLead] = useState(false);
  const [leadInfo, setLeadInfo] = useState({ name: '', phone: '', email: '', category: 'General Inquiry', enquiry: '' });
  const [leadSent, setLeadSent] = useState(false);
  
  const chatEndRef = useRef(null);

  // EmailJS Credentials
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, collectingLead, leadSent]);

  // Automatically categorize user input based on keywords
  const detectCategory = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('nursing') || lower.includes('bsc') || lower.includes('gnm')) return 'Nursing Books';
    if (lower.includes('pharmacy') || lower.includes('bpharm') || lower.includes('dpharm')) return 'Pharmacy Books';
    if (lower.includes('equipment') || lower.includes('stethoscope') || lower.includes('bp machine')) return 'Medical Equipments';
    if (lower.includes('apron') || lower.includes('scrub') || lower.includes('coat')) return 'Doctor Aprons & Scrubs';
    if (lower.includes('mbbs') || lower.includes('anatomy') || lower.includes('surgery') || lower.includes('book')) return 'Medical Books';
    return 'General Inquiry';
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { text: userText, isAi: false }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let matched = false;
      const lowerText = userText.toLowerCase();

      for (let item of knowledgeBase) {
        if (item.keywords.some(kw => lowerText.includes(kw))) {
          setMessages(prev => [...prev, { text: item.answer, isAi: true }]);
          matched = true;
          break;
        }
      }

      if (!matched) {
        setMessages(prev => [...prev, { 
          text: "I don't have exact stock details on that item right now. Please enter your contact details below so our representative can verify and reach out directly!", 
          isAi: true 
        }]);
        setLeadInfo(prev => ({ 
          ...prev, 
          enquiry: userText, 
          category: detectCategory(userText) 
        }));
        setCollectingLead(true);
      }
      setIsTyping(false);
    }, 1000);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsTyping(true);

    const chatHistory = messages.map(m => `${m.isAi ? 'Store AI' : 'Customer'}: ${m.text}`).join('\n');
    
    // Maps chat values directly to standard contact form email fields
    const templateParams = {
      from_name: leadInfo.name,
      phone: leadInfo.phone,
      reply_to: leadInfo.email,
      category: leadInfo.category,           // Inquiry Type / Category
      message: leadInfo.enquiry,             // Main Requirement / Message
      conversation_history: chatHistory,     // Full Context Log
      date_time: new Date().toLocaleString()
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setIsTyping(false);
      setCollectingLead(false);
      setLeadSent(true);
      setMessages(prev => [...prev, { 
        text: "Thank you! Your requirement has been sent to our team. We will check availability and contact you shortly.", 
        isAi: true 
      }]);
    } catch (error) {
      console.error('EmailJS Chat Error:', error);
      setIsTyping(false);
      setCollectingLead(false);
      setMessages(prev => [...prev, { 
        text: "Failed to send requirement. Please contact us directly at 08056095445.", 
        isAi: true 
      }]);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-gradient rounded-circle position-fixed bottom-0 end-0 m-4 shadow-lg d-flex align-items-center justify-content-center"
        style={{ width: '60px', height: '60px', zIndex: 1060 }}
      >
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-chat-dots-fill'} fs-4 text-white`}></i>
      </motion.button>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="chat-window glass-panel overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-white p-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle bg-white text-primary p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                  <i className="bi bi-robot"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Store Assistant</h6>
                  <small className="opacity-75" style={{ fontSize: '11px' }}>● Online</small>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="btn-close btn-close-white"></button>
            </div>

            {/* Message Body */}
            <div 
              className="flex-grow-1 p-3 overflow-y-auto d-flex flex-column gap-2" 
              style={{ backgroundColor: 'rgba(248, 250, 252, 0.7)' }}
            >
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`d-flex w-100 ${m.isAi ? 'justify-content-start' : 'justify-content-end'}`}
                >
                  <div 
                    className={`p-2 px-3 rounded-4 ${
                      m.isAi 
                        ? 'bg-white text-dark shadow-sm rounded-top-left-0' 
                        : 'bg-primary text-white rounded-top-right-0'
                    }`} 
                    style={{ 
                      maxWidth: '80%', 
                      fontSize: '13px', 
                      lineHeight: '1.4',
                      wordBreak: 'break-word'
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="d-flex w-100 justify-content-start">
                  <div className="bg-white p-2 px-3 rounded-4 shadow-sm text-muted" style={{ fontSize: '12px' }}>
                    <i className="bi bi-three-dots"></i> Assistant processing...
                  </div>
                </div>
              )}

              {collectingLead && (
                <div className="bg-white p-3 rounded-4 shadow-sm my-2 border">
                  <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: '13px' }}>Send Direct Enquiry</h6>
                  <form onSubmit={handleLeadSubmit} className="d-flex flex-column gap-2">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required 
                      className="form-control form-control-sm"
                      value={leadInfo.name}
                      onChange={e => setLeadInfo({...leadInfo, name: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone / WhatsApp" 
                      required 
                      className="form-control form-control-sm"
                      value={leadInfo.phone}
                      onChange={e => setLeadInfo({...leadInfo, phone: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required 
                      className="form-control form-control-sm"
                      value={leadInfo.email}
                      onChange={e => setLeadInfo({...leadInfo, email: e.target.value})}
                    />
                    
                    {/* Category Selection */}
                    <select 
                      className="form-select form-select-sm"
                      value={leadInfo.category}
                      onChange={e => setLeadInfo({...leadInfo, category: e.target.value})}
                    >
                      <option value="Medical Books">Medical Books</option>
                      <option value="Nursing Books">Nursing Books</option>
                      <option value="Pharmacy Books">Pharmacy Books</option>
                      <option value="Medical Equipments">Medical Equipments</option>
                      <option value="Doctor Aprons & Scrubs">Doctor Aprons & Scrubs</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>

                    {/* Book Requirement / Inquiry Message */}
                    <textarea 
                      rows={2}
                      placeholder="Book title or requirement details"
                      required
                      className="form-control form-control-sm"
                      value={leadInfo.enquiry}
                      onChange={e => setLeadInfo({...leadInfo, enquiry: e.target.value})}
                    />

                    <button type="submit" disabled={isTyping} className="btn btn-gradient btn-sm w-100 mt-1">
                      {isTyping ? 'Sending...' : 'Submit Enquiry'}
                    </button>
                  </form>
                </div>
              )}

              {leadSent && (
                <div className="alert alert-success p-2 text-center mb-0" style={{ fontSize: '12px' }}>
                  ✅ Thank you. Your enquiry has been sent successfully.
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="p-2 bg-white border-top d-flex gap-2">
              <input
                type="text"
                placeholder="Ask about books, timing..."
                value={input}
                onChange={e => setInput(e.target.value)}
                className="form-control border-0 bg-light rounded-pill px-3"
                style={{ fontSize: '14px' }}
                disabled={collectingLead}
              />
              <button type="submit" disabled={collectingLead} className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
                <i className="bi bi-send-fill" style={{ fontSize: '14px' }}></i>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;