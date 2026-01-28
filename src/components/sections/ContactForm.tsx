import React, { useState, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// Assets
import doodle1 from '../../assets/images/doodle1.png';
import doodle2 from '../../assets/images/doodle2.png';
import northEastIcon from '../../assets/images/north-east.png';
import fileOpen from '../../assets/images/file-open.png';
import successModalPic from '../../assets/images/success-modal-pic.png';

const ContactForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [tempUploadingFiles, setTempUploadingFiles] = useState<any[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const serviceMapping: Record<string, string> = {
    'Product & software development': 'PRODUCT_SOFTWARE_DEVELOPMENT',
    'UI/UX design': 'UI_UX_DESIGN',
    'Graphic design': 'GRAPHIC_DESIGNER',
    'Branding': 'BRANDING',
    'Internship': 'INTERNSHIP'
  };

  const getTeamSizeNumber = (val: string) => {
    if (val.includes('1-3')) return 1;
    if (val.includes('4-6')) return 4;
    if (val.includes('10')) return 10;
    return 0;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      portfolio: prev.portfolio.filter((_, i) => i !== index)
    }));
  };

  const handleUploadConfirm = () => {
    const files = tempUploadingFiles.map(f => f.file);
    setFormData(prev => ({ ...prev, portfolio: [...prev.portfolio, ...files] }));
    setTempUploadingFiles([]);
    setShowUploadModal(false);
    toast.success('Files attached successfully');
  };

  const isFormValid = () => 
    formData.fullName && 
    formData.email && 
    formData.service && 
    formData.message && 
    formData.agreed;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append('fullName', formData.fullName);
      data.append('companyName', formData.email); 
      data.append('address', formData.address || 'N/A');
      data.append('teamSize', getTeamSizeNumber(formData.teamSize).toString());
      data.append('serviceProvided', serviceMapping[formData.service]);
      data.append('helptext', formData.message);

      if (formData.portfolio.length > 0) {
        data.append('file', formData.portfolio[0]);
      }

      const response = await fetch('https://focusgrid-server.onrender.com/api/v1/service-inquiry', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Failed to submit inquiry');
      }

      setShowSuccess(true);
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClass = (field: string) => `
    w-full h-[56px] px-6 rounded-[16px] transition-all duration-300 outline-none border text-[#333333] font-light
    ${errors[field] ? 'border-red-500 bg-red-50 focus:ring-4 focus:ring-red-100' : 
      focusedField === field ? 'border-[#00A550] bg-white ring-4 ring-[#00A550]/5' : 
      'border-gray-200 bg-[#F9F9F9] hover:border-[#00A550]/30'}
  `;

  return (
    <section ref={sectionRef} className="relative w-full pt-28 md:pt-60 pb-24 px-6 overflow-hidden bg-white">
      <Toaster position="top-right" />
      <style>{`
        textarea::-webkit-scrollbar { display: none; }
        textarea { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s infinite ease-in-out; }
      `}</style>

      <div className={`max-w-[1240px] mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="mb-16">
          <h1 className="text-[40px] md:text-[52px] font-semibold text-[#333333] leading-[120%] mb-4" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Let's build something <span className="text-[#00A550]">great together.</span>
          </h1>
          <p className="text-[16px] text-[#545454] opacity-80 font-light max-w-[580px]">
            Whether you're starting a new project, applying for internship or just making an inquiry, this form helps us understand exactly how we can be of service to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Full Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Enter full name" className={getInputClass('fullName')} onFocus={() => setFocusedField('fullName')} onBlur={() => setFocusedField('')} onChange={(e) => handleInputChange('fullName', e.target.value)} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Email Address <span className="text-red-500">*</span></label>
              <input type="email" placeholder="Johndoe@gmail.com" className={getInputClass('email')} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')} onChange={(e) => handleInputChange('email', e.target.value)} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Company Name</label>
              <input type="text" placeholder="Enter company name (if any)" className={getInputClass('company')} onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField('')} onChange={(e) => handleInputChange('company', e.target.value)} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Address</label>
              <input type="text" placeholder="Enter address or location" className={getInputClass('address')} onFocus={() => setFocusedField('address')} onBlur={() => setFocusedField('')} onChange={(e) => handleInputChange('address', e.target.value)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
               <div className="md:col-span-4 flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#333333]">Team Size</label>
                  <div className="relative w-full">
                    <select className={getInputClass('teamSize') + " appearance-none cursor-pointer pr-12"} onFocus={() => setFocusedField('teamSize')} onBlur={() => setFocusedField('')} onChange={(e) => handleInputChange('teamSize', e.target.value)}>
                      <option value="">Select range</option>
                      <option>1-3 people</option>
                      <option>4-6 people</option>
                      <option>over 10 people</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#333333]/40">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                  </div>
               </div>
               <div className="md:col-span-8 flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#333333]">What type of service(s) do you require? <span className="text-red-500">*</span></label>
                  <div className="relative w-full">
                    <select className={getInputClass('service') + " appearance-none cursor-pointer pr-12"} onFocus={() => setFocusedField('service')} onBlur={() => setFocusedField('')} onChange={(e) => handleInputChange('service', e.target.value)}>
                      <option value="">Select at least one</option>
                      <option>Product & software development</option>
                      <option>UI/UX design</option>
                      <option>Graphic design</option>
                      <option>Branding</option>
                      <option>Internship</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#333333]/40">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">What do you need help with? <span className="text-red-500">*</span></label>
              <textarea placeholder="Enter text" className="w-full h-[140px] p-6 rounded-[16px] bg-[#F9F9F9] border border-gray-200 outline-none focus:border-[#00A550] focus:bg-white transition-all resize-none font-light overflow-y-auto" onChange={(e) => handleInputChange('message', e.target.value)}></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Upload File</label>
              <div onClick={() => setShowUploadModal(true)} className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-6 min-h-[140px] flex flex-col items-center justify-center bg-gray-50 hover:bg-[#E6F6EE]/30 hover:border-[#00A550] transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                </div>
                <p className="text-[#333333] font-medium text-xs">Click to upload files</p>
                {formData.portfolio.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {formData.portfolio.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-[#00A550]/20 text-[#00A550] text-[10px] rounded-full flex items-center gap-2 shadow-sm">
                        <span className="truncate max-w-[100px]">{f.name}</span>
                        {/* Static Red X - No Animation */}
                        <button onClick={(e) => { e.stopPropagation(); removeFile(i); }} className="text-[#EF4444] hover:scale-125 transition-transform font-bold">✕</button>
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

            <button type="submit" disabled={!isFormValid() || isSubmitting} className={`w-full h-[60px] rounded-[100px] font-semibold flex items-center justify-center gap-3 transition-all active:scale-95 bg-[#00A550] text-white ${isFormValid() && !isSubmitting ? 'hover:bg-[#008f44]' : 'opacity-50 cursor-not-allowed'}`}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && <img src={northEastIcon} alt="" className="w-4 h-4 brightness-0 invert" />}
            </button>
          </div>
        </form>

        <div className="mt-24 flex justify-center items-center gap-4">
            <img src={doodle1} alt="" className="w-12 h-12 hidden md:block" />
            <div className="w-full max-w-[650px] bg-white rounded-[24px] p-8 text-center cursor-pointer" style={{ border: '0.5px solid #00A550' }}>
                <h4 className="text-[22px] font-semibold text-[#333333] mb-2" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Prefer Talking Directly?</h4>
                <p className="text-[16px] text-[#545454]">Reach us at <span className="text-[#00A550] font-medium underline">focusgrid5@gmail.com</span> or call +234 812 537 6775</p>
            </div>
            <img src={doodle2} alt="" className="w-12 h-12 hidden md:block" />
        </div>
      </div>

      {showUploadModal && (
        <div className="fixed inset-0 bg-[#333333]/60 backdrop-blur-sm flex items-center justify-center z-[100] p-6 animate-in fade-in duration-300">
          <div className="w-full max-w-[600px] bg-white rounded-[32px] p-12 relative animate-in zoom-in-95 duration-300">
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

      {/* SUCCESS MODAL OVERLAY - Updated to match Figma design */}
      {showSuccess && (
        <div className="fixed inset-0 bg-[#333333]/40 backdrop-blur-[2px] flex items-center justify-center z-[200] p-6 animate-in fade-in duration-300">
          <div className="relative bg-white border border-[#00A550] rounded-[20px] p-10 text-center w-full max-w-[452px] animate-in zoom-in-95 duration-500 flex flex-col items-center gap-10" style={{ boxShadow: '0px 4px 8px 3px rgba(51, 183, 115, 0.2)' }}>
            {/* Success Image */}
            <div className="w-[200px] h-[175.82px] flex items-center justify-center">
              <img src={successModalPic} alt="Success" className="w-full h-full object-contain" />
            </div>
            
            {/* Thank you text */}
            <h2 className="text-[24px] font-semibold leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              Thank you!
            </h2>
            
            {/* Description text */}
            <p className="text-[14px] font-normal leading-[140%] text-center text-[#545454] max-w-[292px]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              Your request has been received. Our team will review it and get back to you shortly.
            </p>
            
            {/* Go Back To Home Button */}
            <button 
              onClick={() => { window.location.href = '/'; }} 
              className="w-[202px] h-[48px] bg-[#00A550] text-white rounded-[100px] px-[30px] py-[10px] flex items-center justify-center gap-2 hover:bg-[#008f44] transition-all"
            >
              <span className="text-[14px] font-medium leading-[140%]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                Go Back To Home
              </span>
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none" className="translate-y-[-1px]">
                <path d="M1.33334 6H14.6667M14.6667 6L9.33334 1M14.6667 6L9.33334 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;