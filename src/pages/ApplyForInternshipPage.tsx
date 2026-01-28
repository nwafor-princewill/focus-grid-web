import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import focusGridLogo from '../assets/images/focus-grid-logo.png';
import greenCard from '../assets/images/green-card.png';
import approval from '../assets/images/approval.png';
import fileOpen from '../assets/images/file-open.png';
import successModalPic from '../assets/images/success-modal-pic.png';

const ApplyForInternshipPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    gender: '',
    techStack: '',
    helptext: '',
    uploadFormat: 'PDF file',
    portfolioUrl: '',
    portfolio: [] as File[]
  });

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [tempUploadingFiles, setTempUploadingFiles] = useState<any[]>([]);
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const techStackMapping: Record<string, string> = {
    'Front end development': 'FRONT_WEB_DEVELOPMENT',
    'Back end development': 'BACK_WEB_DEVELOPMENT',
    'UI/UX Design': 'UI_UX_DESIGN',
    'Full stack engineer': 'FULLSTACK',
    'Graphic Design': 'GRAPHIC_DESIGNER'
  };

  const techStackOptions = Object.keys(techStackMapping);

  const getInputClass = (field: string) => `
    w-full h-[56px] px-6 rounded-[16px] transition-all duration-300 outline-none border text-[#333333] font-light
    ${focusedField === field ? 'border-[#00A550] bg-white ring-4 ring-[#00A550]/5' : 
      'border-gray-200 bg-[#F9F9F9] hover:border-[#00A550]/30'}
  `;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
    const MAX_SIZE = 50 * 1024 * 1024; // 50MB
    const newFiles: any[] = [];
    const errors: string[] = [];

    Array.from(files).forEach(file => {
      if (!allowedTypes.includes(file.type)) {
        errors.push(`${file.name} (Unsupported type)`);
      } else if (file.size > MAX_SIZE) {
        errors.push(`${file.name} (Exceeds 50MB)`);
      } else {
        newFiles.push({
          file,
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        });
      }
    });

    if (errors.length > 0) {
      toast.error(`Failed: ${errors.join(', ')}`, {
        icon: '⚠️',
        style: { border: '1px solid #EF4444' }
      });
    }

    if (newFiles.length > 0) {
      setTempUploadingFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleUploadConfirm = () => {
    const files = tempUploadingFiles.map(f => f.file);
    setFormData(prev => ({ ...prev, portfolio: [...prev.portfolio, ...files] }));
    setTempUploadingFiles([]);
    setShowUploadModal(false);
    toast.success('Files attached successfully');
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      portfolio: prev.portfolio.filter((_, i) => i !== index)
    }));
  };

  const isFormValid = () => 
    formData.firstName && formData.lastName && formData.emailAddress && 
    formData.phoneNumber && formData.gender && formData.techStack &&
    formData.helptext && (formData.uploadFormat === 'URL' ? formData.portfolioUrl : formData.portfolio.length > 0);

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      data.append('fullName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('emailAddress', formData.emailAddress);
      data.append('phoneNumber', formData.phoneNumber);
      data.append('gender', formData.gender.toUpperCase());
      data.append('techStack', techStackMapping[formData.techStack]);
      data.append('helptext', formData.helptext);

      if (formData.uploadFormat === 'URL') {
        data.append('portfolioUrl', formData.portfolioUrl);
      } else {
        // Appending all files to the 'file' key
        formData.portfolio.forEach(f => data.append('file', f));
      }

      const response = await fetch('https://focusgrid-server.onrender.com/api/v1/internship-application', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) throw new Error('Submission failed');
      setShowSuccess(true);
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white relative">
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 5000,
          style: {
            background: '#FFFFFF',
            color: '#333333',
            border: '1px solid #00A550',
            borderRadius: '12px',
            boxShadow: 'none',
            fontSize: '14px',
            padding: '12px 20px'
          }
        }}
      />
      
      <style>{`
        textarea::-webkit-scrollbar { display: none; }
        textarea { -ms-overflow-style: none; scrollbar-width: none; resize: none; }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Sidebar */}
      <div className="w-full lg:w-[500px] xl:w-[600px] bg-[#E6F6EE] p-8 lg:p-16 flex flex-col lg:h-screen lg:sticky lg:top-0 z-10 border-r border-[#00A550]/5 overflow-y-auto no-scrollbar">
        <div className="mb-10 lg:mb-0">
          <img src={focusGridLogo} alt="Focus Grid" className="w-[120px]" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="relative w-full max-w-[320px] mb-12 hidden lg:block mx-auto">
            <div className="absolute inset-0 bg-[#00A550]/5 blur-3xl rounded-full" />
            <img src={greenCard} alt="Card" className="relative w-full h-auto animate-float" />
            <img src={approval} alt="Approved" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20" />
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#333333] mb-6 leading-[1.1]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            We are <span className="text-[#00A550]">Hiring!</span>
          </h1>
          <p className="text-lg font-light text-[#545454] leading-relaxed opacity-80 mb-10 max-w-[400px]">
            Designers, Developers, and Strategists united by one mission. Join our talent network today.
          </p>
          <Link to="/" className="w-full max-w-[240px]">
            <button className="w-full flex items-center justify-center gap-3 text-[#00A550] font-semibold py-4 border-2 border-[#00A550] rounded-2xl hover:bg-[#00A550] hover:text-white transition-all group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="flex-1 p-6 lg:py-20 lg:pl-28 lg:pr-16 bg-white">
        <div className="max-w-[700px]">
          <header className="mb-14">
            <h2 className="text-[40px] font-bold text-[#333333] mb-3" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Apply for Internship</h2>
            <p className="text-[#8A8A8A] text-lg font-light">Complete the form below to start your journey.</p>
          </header>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#333333]">First Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="John" className={getInputClass('firstName')} onChange={(e) => handleInputChange('firstName', e.target.value)} onFocus={() => setFocusedField('firstName')} onBlur={() => setFocusedField('')} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#333333]">Last Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Doe" className={getInputClass('lastName')} onChange={(e) => handleInputChange('lastName', e.target.value)} onFocus={() => setFocusedField('lastName')} onBlur={() => setFocusedField('')} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Email Address <span className="text-red-500">*</span></label>
              <input type="email" placeholder="john@example.com" className={getInputClass('email')} onChange={(e) => handleInputChange('emailAddress', e.target.value)} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Phone Number <span className="text-red-500">*</span></label>
              <div className={`${getInputClass('phone')} flex items-center`}>
                <span className="pr-3 border-r border-gray-200 mr-3 text-[#333333] font-medium">+234</span>
                <input type="tel" placeholder="801 234 5678" className="bg-transparent outline-none w-full" onChange={(e) => handleInputChange('phoneNumber', e.target.value)} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField('')} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-[#333333]">Gender</label>
                <div className="flex gap-4">
                  {['Male', 'Female'].map((g) => (
                    <button key={g} type="button" onClick={() => handleInputChange('gender', g)} className={`flex-1 h-[56px] rounded-2xl border transition-all flex items-center justify-center gap-3 ${formData.gender === g ? 'border-[#00A550] bg-[#E6F6EE] text-[#00A550] font-medium' : 'border-gray-200 bg-gray-50 text-[#545454]'}`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${formData.gender === g ? 'bg-[#00A550]' : 'bg-gray-300'}`} />{g}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-[#333333]">Tech Stack <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select onChange={(e) => handleInputChange('techStack', e.target.value)} className={`${getInputClass('techStack')} appearance-none cursor-pointer pr-12`}>
                    <option value="">Select your track</option>
                    {techStackOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#333333]/40">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#333333]">Why do you want this internship? <span className="text-red-500">*</span></label>
              <textarea rows={4} placeholder="Tell us about yourself..." className={`${getInputClass('helptext')} h-auto py-4 min-h-[120px]`} onChange={(e) => handleInputChange('helptext', e.target.value)} />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-[#333333]">Share your portfolio and work via</label>
              <div className="flex gap-4">
                {['PDF file', 'URL'].map((f) => (
                  <button key={f} type="button" onClick={() => handleInputChange('uploadFormat', f)} className={`flex-1 h-[56px] rounded-2xl border transition-all flex items-center justify-center gap-3 ${formData.uploadFormat === f ? 'border-[#00A550] bg-[#E6F6EE] text-[#00A550] font-medium' : 'border-gray-200 bg-gray-50 text-[#545454]'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${formData.uploadFormat === f ? 'bg-[#00A550]' : 'bg-gray-300'}`} />{f}
                  </button>
                ))}
              </div>
            </div>

            {formData.uploadFormat === 'PDF file' ? (
              <div onClick={() => setShowUploadModal(true)} className="w-full border-2 border-dashed border-gray-200 rounded-[24px] p-10 flex flex-col items-center justify-center bg-gray-50 hover:bg-[#E6F6EE]/30 hover:border-[#00A550] transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <img src={fileOpen} alt="Open" className="w-6 h-6" />
                </div>
                <p className="text-[#333333] font-medium text-sm">Click to upload files (PDF or Images, Max 50MB)</p>
                {formData.portfolio.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {formData.portfolio.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-[#00A550]/20 text-[#00A550] text-[10px] rounded-full flex items-center gap-2">
                        <span className="truncate max-w-[120px]">{f.name}</span>
                        <button onClick={(e) => { e.stopPropagation(); removeFile(i); }} className="text-[#EF4444] font-bold">✕</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <input type="url" placeholder="Portfolio Link (e.g. Behance, GitHub)" className={getInputClass('url')} onChange={(e) => handleInputChange('portfolioUrl', e.target.value)} />
            )}

            <button onClick={handleSubmit} disabled={!isFormValid() || isSubmitting} className={`w-full h-[60px] rounded-[100px] font-semibold flex items-center justify-center transition-all active:scale-95 bg-[#00A550] text-white ${isFormValid() && !isSubmitting ? 'hover:bg-[#008f44]' : 'opacity-50 cursor-not-allowed'}`}>
              {isSubmitting ? 'Sending Application...' : 'Submit Application'}
            </button>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-[#333333]/40 backdrop-blur-[2px] flex items-center justify-center z-[100] p-6">
          <div className="w-full max-w-[600px] bg-white border border-gray-100 rounded-[32px] p-12 relative">
            <button onClick={() => { setShowUploadModal(false); setTempUploadingFiles([]); }} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <h3 className="text-2xl font-bold text-[#333333] mb-1">Attach Documents</h3>
            <p className="text-[#8A8A8A] text-sm mb-8">Upload PDF or images (Max 50MB).</p>

            <label htmlFor="file-upload" className="w-full h-44 border-2 border-dashed border-[#00A550]/30 bg-[#F0FDF4] rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#E6F6EE] mb-6 group">
              <input type="file" multiple accept=".pdf,image/*" onChange={(e) => handleFileSelect(e.target.files)} className="hidden" id="file-upload" />
              <img src={fileOpen} alt="Upload" className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-[#00A550] font-semibold">Browse and select</p>
            </label>

            <div className="space-y-3 max-h-[180px] overflow-y-auto mb-8 pr-2 no-scrollbar">
              {tempUploadingFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center"><img src={fileOpen} alt="file" className="w-5 h-5" /></div>
                    <p className="text-sm font-semibold text-[#333333] truncate">{file.name}</p>
                  </div>
                  <button onClick={() => setTempUploadingFiles(prev => prev.filter((_, i) => i !== index))} className="text-red-400 p-1 hover:text-red-600 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>
              ))}
            </div>

            <button onClick={handleUploadConfirm} disabled={tempUploadingFiles.length === 0} className="w-full h-14 bg-[#00A550] text-white rounded-xl font-bold hover:bg-[#008f44] transition-all disabled:opacity-50">
              Confirm Selection
            </button>
          </div>
        </div>
      )}

      {/* Success Modal - Updated to match ContactForm design */}
      {showSuccess && (
        <div className="fixed inset-0 bg-[#333333]/40 backdrop-blur-[2px] flex items-center justify-center z-[200] p-6 animate-in fade-in duration-300">
          <div className="relative bg-white border border-[#00A550] rounded-[20px] p-10 text-center w-full max-w-[452px] animate-in zoom-in-95 duration-500 flex flex-col items-center gap-10" style={{ boxShadow: '0px 4px 8px 3px rgba(51, 183, 115, 0.2)' }}>
            {/* Success Image */}
            <div className="w-[200px] h-[175.82px] flex items-center justify-center">
              <img src={successModalPic} alt="Success" className="w-full h-full object-contain" />
            </div>
            
            {/* Application Sent text */}
            <h2 className="text-[24px] font-semibold leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              Application Sent!
            </h2>
            
            {/* Description text */}
            <p className="text-[12px] font-normal leading-[140%] text-center text-[#545454] max-w-[292px]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              We've received your application. Our team will review it soon.
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
    </div>
  );
};

export default ApplyForInternshipPage;