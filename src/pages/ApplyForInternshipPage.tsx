import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import focusGridLogo from '../assets/images/focus-grid-logo.png';
import greenCard from '../assets/images/green-card.png';
import approval from '../assets/images/approval.png';
import fileOpen from '../assets/images/file-open.png';

const ApplyForInternshipPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '', // Matched to API key
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
  const [errors, setErrors] = useState<any>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mapping UI display names to exact Backend Enum values
  const techStackMapping: Record<string, string> = {
    'Front end development': 'FRONT_WEB_DEVELOPMENT',
    'Back end development': 'BACK_WEB_DEVELOPMENT',
    'UI/UX Design': 'UI_UX_DESIGN',
    'Full stack engineer': 'FULLSTACK',
    'Graphic Design': 'GRAPHIC_DESIGNER'
  };

  const techStackOptions = Object.keys(techStackMapping);

  const getInputClass = (field: string) => `
    w-full h-[52px] border rounded-xl px-[15px] text-base font-light transition-all duration-300 outline-none
    ${focusedField === field 
      ? 'border-[#00A550] bg-white ring-4 ring-[#00A550]/5' 
      : 'border-[#E0E0E0] bg-[#F9F9F9] hover:border-[#CCCCCC]'}
  `;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev: any) => ({ ...prev, [field]: '' }));
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files).map(file => ({
      file,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
    }));
    setTempUploadingFiles(prev => [...prev, ...newFiles]);
  };

  const handleUploadConfirm = () => {
    const files = tempUploadingFiles.map(f => f.file);
    setFormData(prev => ({ ...prev, portfolio: [...prev.portfolio, ...files] }));
    setTempUploadingFiles([]);
    setShowUploadModal(false);
  };

  const isFormValid = () => 
    formData.firstName && 
    formData.lastName && 
    formData.emailAddress && 
    formData.phoneNumber && 
    formData.gender && 
    formData.techStack &&
    formData.helptext &&
    (formData.uploadFormat === 'URL' ? formData.portfolioUrl : formData.portfolio.length > 0);

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      data.append('fullName', formData.firstName); // Backend uses fullName for first name
      data.append('lastName', formData.lastName);
      data.append('emailAddress', formData.emailAddress);
      data.append('phoneNumber', formData.phoneNumber);
      data.append('gender', formData.gender.toUpperCase());
      // Use the mapper to send the EXACT string the server wants
      data.append('techStack', techStackMapping[formData.techStack]);
      data.append('helptext', formData.helptext);

      if (formData.uploadFormat === 'URL') {
        data.append('portfolioUrl', formData.portfolioUrl);
      } else {
        // Send the first file in the array as 'file'
        data.append('file', formData.portfolio[0]);
      }

      const response = await fetch('https://focusgrid-server.onrender.com/api/v1/internship-application', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed');
      }

      setShowSuccess(true);
    } catch (error: any) {
      console.error('Submission failed:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#F0FDF4] flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00A550]/5 rounded-full blur-3xl animate-pulse" />
        <div className="bg-white/90 backdrop-blur-xl border border-white rounded-[32px] p-12 text-center max-w-[500px] relative z-10 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-[#00A550] rounded-full mx-auto mb-8 flex items-center justify-center animate-bounce">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className="text-4xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Application Sent!</h2>
          <p className="text-[#545454] mb-10 font-light leading-relaxed">We've received your application. Our team will review it soon.</p>
          <Link to="/">
            <button className="w-full bg-[#00A550] text-white h-[60px] rounded-2xl font-semibold hover:bg-[#008f44] transition-all active:scale-95">Return Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Sidebar - RESTORED IMAGES & ANIMATION */}
      <div className="w-full lg:w-[450px] xl:w-[550px] bg-[#E6F6EE] p-8 lg:p-16 flex flex-col lg:h-screen lg:sticky lg:top-0 z-10 overflow-y-auto scrollbar-hide border-r border-[#00A550]/5">
        <div className="flex flex-col min-h-full">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
            <img src={focusGridLogo} alt="Focus Grid" className="w-[120px] mb-8 lg:mb-16 shrink-0 hover:scale-105 transition-transform" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative w-full max-w-[340px] mx-auto mb-12 hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="absolute inset-0 bg-[#00A550]/10 blur-3xl rounded-full" />
              <img src={greenCard} alt="Card" className="relative w-full h-auto animate-float" />
              <img src={approval} alt="Approved" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 drop-shadow-2xl animate-pulse" />
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#333333] mb-6 leading-[1.1]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                We are <span className="text-[#00A550]">Hiring!</span>
              </h1>
              <p className="text-lg font-light text-[#545454] leading-relaxed mb-12 opacity-80">
                Designers, Developers, and Strategists united by one mission. Together, we turn bold ideas into real solutions. Join our talent network today.
              </p>
            </div>
          </div>
          <div className="mt-auto pt-10 border-t border-[#00A550]/10 flex justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <Link to="/" className="w-full flex justify-center">
              <button className="flex items-center justify-center gap-3 text-[#00A550] font-semibold py-4 px-10 border-2 border-[#00A550] rounded-2xl hover:bg-[#00A550] hover:text-white transition-all duration-300 group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="flex-1 p-6 lg:p-20 bg-white">
        <div className="max-w-[650px] mx-auto animate-in fade-in slide-in-from-right-10 duration-1000">
          <header className="mb-14">
            <h2 className="text-4xl font-bold text-[#333333] mb-3" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Apply for Internship</h2>
            <p className="text-[#8A8A8A] text-lg font-light">Complete the form below to start your journey.</p>
          </header>

          <div className="space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#333333] px-1 uppercase tracking-wider">First Name</label>
                <input type="text" placeholder="John" value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} onFocus={() => setFocusedField('firstName')} onBlur={() => setFocusedField('')} className={getInputClass('firstName')} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#333333] px-1 uppercase tracking-wider">Last Name</label>
                <input type="text" placeholder="Doe" value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} onFocus={() => setFocusedField('lastName')} onBlur={() => setFocusedField('')} className={getInputClass('lastName')} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#333333] px-1 uppercase tracking-wider">Email Address</label>
              <input type="email" placeholder="john@example.com" value={formData.emailAddress} onChange={(e) => handleInputChange('emailAddress', e.target.value)} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')} className={getInputClass('email')} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#333333] px-1 uppercase tracking-wider">Phone Number</label>
              <div className={`${getInputClass('phone')} flex items-center`}>
                <span className="pr-3 border-r border-gray-200 mr-3 text-[#333333] font-bold">+234</span>
                <input type="tel" placeholder="801 234 5678" className="bg-transparent outline-none w-full font-light" value={formData.phoneNumber} onChange={(e) => handleInputChange('phoneNumber', e.target.value)} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField('')} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-[#333333] uppercase tracking-wider">Gender</label>
                <div className="flex gap-4">
                  {['Male', 'Female'].map((g) => (
                    <button key={g} type="button" onClick={() => handleInputChange('gender', g)} className={`flex-1 h-[56px] rounded-2xl border-2 transition-all duration-300 flex items-center justify-center gap-3 ${formData.gender === g ? 'border-[#00A550] bg-[#E6F6EE] text-[#00A550] font-bold' : 'border-gray-100 bg-gray-50 text-[#545454]'}`}>
                      <div className={`w-3 h-3 rounded-full transition-all ${formData.gender === g ? 'bg-[#00A550] scale-125' : 'bg-gray-300'}`} />{g}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-[#333333] uppercase tracking-wider">Tech Stack</label>
                <select value={formData.techStack} onChange={(e) => handleInputChange('techStack', e.target.value)} className={`${getInputClass('techStack')} appearance-none cursor-pointer`}>
                  <option value="" disabled>Select your track</option>
                  {techStackOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#333333] px-1 uppercase tracking-wider">Why do you want this internship?</label>
              <textarea rows={4} placeholder="Tell us about yourself..." value={formData.helptext} onChange={(e) => handleInputChange('helptext', e.target.value)} className={`${getInputClass('helptext')} h-auto py-4 min-h-[120px]`} />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold text-[#333333] uppercase tracking-wider">Share your work via</label>
              <div className="flex gap-4">
                {['PDF file', 'URL'].map((f) => (
                  <button key={f} type="button" onClick={() => handleInputChange('uploadFormat', f)} className={`flex-1 h-[56px] rounded-2xl border-2 transition-all duration-300 flex items-center justify-center gap-3 ${formData.uploadFormat === f ? 'border-[#00A550] bg-[#E6F6EE] text-[#00A550] font-bold' : 'border-gray-100 bg-gray-50 text-[#545454]'}`}>
                    <div className={`w-3 h-3 rounded-full transition-all ${formData.uploadFormat === f ? 'bg-[#00A550] scale-125' : 'bg-gray-300'}`} />{f}
                  </button>
                ))}
              </div>
            </div>

            {formData.uploadFormat === 'PDF file' ? (
              <div onClick={() => setShowUploadModal(true)} className="w-full border-2 border-dashed border-gray-200 rounded-[24px] p-12 flex flex-col items-center justify-center bg-gray-50 hover:bg-[#E6F6EE]/40 hover:border-[#00A550] transition-all cursor-pointer group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-4"><img src={fileOpen} alt="Open" className="w-8 h-8" /></div>
                  <p className="text-[#333333] font-bold text-lg">Click to upload files</p>
                </div>
                {/* RESTORED MULTI-FILE LIST DISPLAY */}
                {formData.portfolio.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {formData.portfolio.map((f, i) => (
                      <span key={i} className="px-4 py-1.5 bg-white border border-[#00A550]/20 text-[#00A550] text-xs font-medium rounded-full flex items-center gap-2">{f.name}</span>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <input type="url" placeholder="Portfolio Link (e.g. Behance, GitHub)" value={formData.portfolioUrl} onChange={(e) => handleInputChange('portfolioUrl', e.target.value)} className={getInputClass('url')} />
            )}

            <button onClick={handleSubmit} disabled={!isFormValid() || isSubmitting} className={`w-full lg:w-[260px] h-[64px] rounded-2xl font-bold transition-all ml-auto block text-lg ${isFormValid() && !isSubmitting ? 'bg-[#00A550] text-white hover:scale-[1.02] active:scale-95' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </div>
      </div>

      {/* Modal - RESTORED FULLY */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-[#333333]/70 backdrop-blur-md flex items-center justify-center z-[100] p-6">
          <div className="w-full max-w-[600px] bg-white rounded-[40px] p-8 lg:p-14 relative animate-in zoom-in-95 duration-500">
            <button onClick={() => { setShowUploadModal(false); setTempUploadingFiles([]); }} className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-full transition-all active:rotate-90"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
            <h3 className="text-3xl font-bold text-[#333333] mb-10">Attach Documents</h3>
            <label htmlFor="file-upload" className="w-full h-52 border-2 border-dashed border-[#00A550]/20 bg-[#F0FDF4] rounded-[32px] flex flex-col items-center justify-center cursor-pointer mb-8 group">
              <input type="file" multiple onChange={(e) => handleFileSelect(e.target.files)} className="hidden" id="file-upload" />
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><img src={fileOpen} alt="Upload" className="w-10 h-10" /></div>
              <p className="text-[#00A550] font-bold text-lg">Browse and select</p>
            </label>
            <div className="space-y-4 max-h-[220px] overflow-y-auto mb-10 pr-3 custom-scrollbar">
              {tempUploadingFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 group">
                  <div className="flex items-center gap-4 truncate">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform"><img src={fileOpen} alt="file icon" className="w-6 h-6" /></div>
                    <div className="truncate"><p className="text-base font-bold text-[#333333] truncate max-w-[200px]">{file.name}</p><p className="text-xs text-[#8A8A8A] font-medium">{file.size}</p></div>
                  </div>
                  <button onClick={() => setTempUploadingFiles(prev => prev.filter((_, i) => i !== index))} className="p-2 text-red-400 hover:text-red-600"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
                </div>
              ))}
            </div>
            <button onClick={handleUploadConfirm} disabled={tempUploadingFiles.length === 0} className="w-full h-16 bg-[#00A550] text-white rounded-[20px] font-bold disabled:opacity-50 transition-all">Confirm Selection</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #00A55044; border-radius: 20px; }
      `}</style>
    </div>
  );
};

export default ApplyForInternshipPage;