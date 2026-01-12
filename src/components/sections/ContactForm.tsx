import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Assets
import doodle1 from '../../assets/images/doodle1.png';
import doodle2 from '../../assets/images/doodle2.png';
import northEastIcon from '../../assets/images/north-east.png';
import fileOpen from '../../assets/images/file-open.png';

const ContactForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [tempUploadingFiles, setTempUploadingFiles] = useState<any[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    address: '',
    teamSize: '',
    service: '',
    message: '',
    portfolio: [] as File[],
    agreed: false
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Form Logic
  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[field];
        return newErrs;
    });
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files).map(file => ({
      file,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
    }));
    setTempUploadingFiles(prev => [...prev, ...newFiles]);
  };

  const handleUploadConfirm = () => {
    const files = tempUploadingFiles.map(f => f.file);
    setFormData(prev => ({ ...prev, portfolio: [...prev.portfolio, ...files] }));
    setTempUploadingFiles([]);
    setShowUploadModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email address is required";
    if (!formData.agreed) newErrors.agreed = "Please agree to terms";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setShowSuccess(true);
  };

  // UI Utilities
  const getInputClass = (field: string) => `
    w-full h-[56px] px-6 rounded-[16px] transition-all duration-300 outline-none border text-[#333333] font-light
    ${errors[field] ? 'border-red-500 bg-red-50 focus:ring-4 focus:ring-red-100' : 
      focusedField === field ? 'border-[#00A550] bg-white ring-4 ring-[#00A550]/5 shadow-sm' : 
      'border-gray-200 bg-[#F9F9F9] hover:border-[#00A550]/30'}
  `;

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 pt-60">
        <div className="bg-white rounded-[32px] p-12 text-center max-w-[500px] shadow-2xl border border-[#E6F6EE] animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-[#00A550] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#00A550]/30">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Message Sent!</h2>
          <p className="text-[#545454] mb-8 font-light">Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.</p>
          <button onClick={() => setShowSuccess(false)} className="w-full bg-[#00A550] text-white h-[56px] rounded-xl font-medium hover:bg-[#008f44] transition-all active:scale-95">
             Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <section ref={sectionRef} className="relative w-full pt-60 pb-24 px-6 overflow-hidden bg-white">
      <div className={`max-w-[1240px] mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-[40px] md:text-[52px] font-semibold text-[#333333] leading-[120%] mb-4" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Let’s build something <span className="text-[#00A550]">great together.</span>
          </h1>
          <p className="text-[16px] text-[#545454] opacity-80 font-light max-w-[580px]">
            Whether you’re starting a new project, applying for internship or just making an inquiry, this form helps us understand exactly how we can be of service to you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Full Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Enter full name" className={getInputClass('fullName')} onFocus={() => setFocusedField('fullName')} onBlur={() => setFocusedField('')} onChange={(e) => handleInputChange('fullName', e.target.value)} />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Email Address <span className="text-red-500">*</span></label>
              <input type="email" placeholder="Johndoe@gmail.com" className={getInputClass('email')} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')} onChange={(e) => handleInputChange('email', e.target.value)} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Company Name</label>
              <input type="text" placeholder="Enter company name (if any)" className={getInputClass('company')} onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField('')} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Address</label>
              <input type="text" placeholder="Enter address or location" className={getInputClass('address')} onFocus={() => setFocusedField('address')} onBlur={() => setFocusedField('')} />
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col gap-2 relative">
                  <label className="text-sm font-medium text-[#333333]">Team Size</label>
                  <select className={getInputClass('teamSize') + " appearance-none cursor-pointer"} onFocus={() => setFocusedField('teamSize')} onBlur={() => setFocusedField('')}>
                    <option value="">Select range</option>
                    <option>1-10 Employees</option>
                    <option>11-50 Employees</option>
                    <option>51-200 Employees</option>
                    <option>200+ Employees</option>
                  </select>
                  <div className="absolute right-4 top-[48px] pointer-events-none opacity-50"><svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
               </div>
               <div className="flex flex-col gap-2 relative">
                  <label className="text-sm font-medium text-[#333333]">Service Type</label>
                  <select className={getInputClass('service') + " appearance-none cursor-pointer"} onFocus={() => setFocusedField('service')} onBlur={() => setFocusedField('')}>
                    <option value="">Select at least one</option>
                    <option>Product Design (UI/UX)</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Brand Identity</option>
                    <option>MVP Development</option>
                    <option>Maintenance & Support</option>
                  </select>
                  <div className="absolute right-4 top-[48px] pointer-events-none opacity-50"><svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
               </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">What do you need help with? <span className="text-red-500">*</span></label>
              <textarea placeholder="Enter text" className="w-full h-[140px] p-6 rounded-[16px] bg-[#F9F9F9] border border-gray-200 outline-none focus:border-[#00A550] focus:bg-white transition-all resize-none font-light"></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Upload File</label>
              <div onClick={() => setShowUploadModal(true)} className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-6 min-h-[140px] flex flex-col items-center justify-center bg-gray-50 hover:bg-[#E6F6EE]/30 hover:border-[#00A550] transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-2 group-hover:scale-110 transition-transform">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                </div>
                <p className="text-[#333333] font-medium text-xs">Click to upload files</p>
                
                {/* --- RESTORED FILE LISTING --- */}
                {formData.portfolio.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {formData.portfolio.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-[#00A550]/20 text-[#00A550] text-[10px] rounded-full shadow-sm">
                        {f.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 accent-[#00A550] cursor-pointer" id="terms" onChange={(e) => handleInputChange('agreed', e.target.checked)} />
              <label htmlFor="terms" className="text-sm text-[#545454] cursor-pointer">I agree to terms & privacy policy. <span className="text-red-500">*</span></label>
            </div>

            <button type="submit" className="w-full h-[60px] bg-[#00A550] text-white rounded-[100px] font-semibold flex items-center justify-center gap-3 hover:bg-[#008f44] transition-all active:scale-95">
              <span>Send Message</span>
              <img src={northEastIcon} alt="" className="w-4 h-4 brightness-0 invert" />
            </button>
          </div>
        </form>

        <div className="mt-24 flex justify-center items-center gap-4">
            <img src={doodle1} alt="" className="w-12 h-12 hidden md:block animate-bounce" />
            <div className="w-full max-w-[650px] bg-white border border-[#E6F6EE] rounded-[24px] p-8 text-center shadow-sm hover:border-[#00A550] hover:ring-4 hover:ring-[#00A550]/5 transition-all duration-300 cursor-default">
                <h4 className="text-[20px] font-semibold text-[#333333] mb-2" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Prefer Talking Directly?</h4>
                <p className="text-[14px] text-[#545454]">Reach us at <span className="text-[#00A550] font-medium underline">focusgrid5@gmail.com</span> or call +234 812 537 6775</p>
            </div>
            <img src={doodle2} alt="" className="w-12 h-12 hidden md:block animate-bounce" />
        </div>
      </div>

      {/* MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-[#333333]/60 backdrop-blur-sm flex items-center justify-center z-[100] p-6 animate-in fade-in duration-300">
          <div className="w-full max-w-[600px] bg-white rounded-[32px] p-12 relative shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => { setShowUploadModal(false); setTempUploadingFiles([]); }} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <h3 className="text-2xl font-bold text-[#333333] mb-1" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Attach Documents</h3>
            <p className="text-[#8A8A8A] text-sm mb-8">Upload files to support your inquiry.</p>

            <label htmlFor="file-upload" className="w-full h-44 border-2 border-dashed border-[#00A550]/30 bg-[#F0FDF4] rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#E6F6EE] mb-6 group">
              <input type="file" multiple onChange={(e) => handleFileSelect(e.target.files)} className="hidden" id="file-upload" />
              <img src={fileOpen} alt="Upload" className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-[#00A550] font-semibold">Browse and select</p>
            </label>

            <div className="space-y-3 max-h-[180px] overflow-y-auto mb-8 pr-2">
              {tempUploadingFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A550" strokeWidth="2"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                    </div>
                    <p className="text-sm font-semibold text-[#333333] truncate">{file.name}</p>
                  </div>
                  <button onClick={() => setTempUploadingFiles(prev => prev.filter((_, i) => i !== index))} className="text-red-400 p-1 hover:text-red-600 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>
              ))}
            </div>

            <button onClick={handleUploadConfirm} disabled={tempUploadingFiles.length === 0} className="w-full h-14 bg-[#00A550] text-white rounded-xl font-bold hover:bg-[#008f44] transition-all disabled:opacity-50">
              Confirm {tempUploadingFiles.length} {tempUploadingFiles.length === 1 ? 'File' : 'Files'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;