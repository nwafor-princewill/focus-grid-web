import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import focusGridLogo from '../assets/images/focus-grid-logo.png';
import greenCard from '../assets/images/green-card.png';
import approval from '../assets/images/approval.png';
import fileOpen from '../assets/images/file-open.png';

const ApplyForInternshipPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    techStack: '',
    portfolio: [] as File[]
  });

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [tempUploadingFiles, setTempUploadingFiles] = useState<any[]>([]);
  const [errors, setErrors] = useState<any>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const techStackOptions = [
    'Front end development',
    'Back end development',
    'UI/UX Design',
    'Full stack engineer',
    'Graphic Design'
  ];

  // Utility to handle input styles dynamically
  const getInputClass = (field: string) => `
    w-full h-[52px] border rounded-xl px-[15px] text-base font-light transition-all duration-300 outline-none
    ${focusedField === field 
      ? 'border-[#00A550] bg-white ring-4 ring-[#00A550]/5 shadow-sm' 
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
      timeLeft: 'Ready'
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
    formData.fullName && 
    formData.email && 
    formData.phoneNumber && 
    formData.gender && 
    formData.techStack;

  const handleSubmit = () => {
    if (!isFormValid()) return;
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#F0FDF4] flex items-center justify-center p-6">
        <div className="bg-white rounded-[32px] p-12 text-center max-w-[500px] shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-[#00A550] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#00A550]/30">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Application Sent!</h2>
          <p className="text-[#545454] mb-8 font-light">We've received your application. Our team will review your portfolio and get back to you via email soon.</p>
          <Link to="/">
            <button className="w-full bg-[#00A550] text-white h-[56px] rounded-xl font-medium hover:bg-[#008f44] transition-all active:scale-95 shadow-lg shadow-[#00A550]/20">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* --- LEFT SIDEBAR: FIXED UPDATE --- */}
      <div className="w-full lg:w-[450px] xl:w-[550px] bg-[#E6F6EE] p-8 lg:p-16 flex flex-col lg:h-screen lg:sticky lg:top-0 z-10 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col min-h-full animate-in fade-in slide-in-from-left-10 duration-700">
          
          <img src={focusGridLogo} alt="Focus Grid" className="w-[100px] mb-8 lg:mb-16 shrink-0" />
          
          <div className="flex-1">
            <div className="relative w-full max-w-[320px] mx-auto mb-10 hidden lg:block">
              <img src={greenCard} alt="Card" className="w-full h-auto animate-pulse duration-[4000ms]" />
              <img src={approval} alt="Approved" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 drop-shadow-xl" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6 leading-tight" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              We are <span className="text-[#00A550]">Hiring!</span>
            </h1>
            <p className="text-lg font-light text-[#545454] leading-relaxed mb-12">
              Designers, Developers, and Strategists united by one mission. Together, we turn bold ideas into real solutions. Join our talent network today.
            </p>
          </div>

          <div className="mt-auto pt-8 border-t border-[#00A550]/10 shrink-0">
            <Link to="/">
              <button className="w-full lg:w-auto flex items-center justify-center gap-2 text-[#00A550] font-medium py-4 px-6 border border-[#00A550] rounded-xl hover:bg-[#00A550] hover:text-white transition-all group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: FORM --- */}
      <div className="flex-1 p-6 lg:p-20">
        <div className="max-w-[650px] mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <header className="mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-2" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Apply for Internship</h2>
            <p className="text-[#8A8A8A] font-light">Complete the form below to start your journey with us.</p>
          </header>

          <div className="space-y-8">
            {/* Personal Details */}
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#333333] px-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField('')}
                  className={getInputClass('fullName')}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#333333] px-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className={getInputClass('email')}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#333333] px-1">Phone Number</label>
                <div className={`${getInputClass('phone')} flex items-center`}>
                  <span className="pr-3 border-r border-gray-300 mr-3 text-[#333333] font-medium">+234</span>
                  <input
                    type="tel"
                    placeholder="801 234 5678"
                    className="bg-transparent outline-none w-full"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>
              </div>
            </div>

            {/* Selection Row */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-[#333333]">Gender</label>
                <div className="flex gap-4">
                  {['Male', 'Female'].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => handleInputChange('gender', g)}
                      className={`flex-1 h-[52px] rounded-xl border-2 transition-all flex items-center justify-center gap-2 
                        ${formData.gender === g ? 'border-[#00A550] bg-[#E6F6EE] text-[#00A550] font-medium' : 'border-gray-100 bg-gray-50 text-[#545454]'}`}
                    >
                      <div className={`w-3 h-3 rounded-full ${formData.gender === g ? 'bg-[#00A550]' : 'bg-gray-300'}`} />
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-[#333333]">Tech Stack</label>
                <div className="relative">
                  <select
                    value={formData.techStack}
                    onChange={(e) => handleInputChange('techStack', e.target.value)}
                    onFocus={() => setFocusedField('techStack')}
                    onBlur={() => setFocusedField('')}
                    className={`${getInputClass('techStack')} appearance-none`}
                  >
                    <option value="" disabled>Select your track</option>
                    {techStackOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Section */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-[#333333]">Portfolio / CV</label>
              <div 
                onClick={() => setShowUploadModal(true)}
                className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-gray-50 hover:bg-[#E6F6EE]/30 hover:border-[#00A550] transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                  </svg>
                </div>
                <p className="text-[#333333] font-medium">Click to upload files</p>
                <p className="text-xs text-[#8A8A8A] mt-1">PDF, DOCX or ZIP (Max 50MB)</p>
                
                {formData.portfolio.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {formData.portfolio.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-[#00A550]/20 text-[#00A550] text-[10px] rounded-full shadow-sm flex items-center gap-2">
                        {f.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className={`w-full lg:w-[220px] h-[60px] rounded-xl font-bold transition-all ml-auto block
                ${isFormValid() 
                  ? 'bg-[#00A550] text-white shadow-lg shadow-[#00A550]/20 hover:scale-[1.02] active:scale-95' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-[#333333]/60 backdrop-blur-sm flex items-center justify-center z-[100] p-6 animate-in fade-in duration-300">
          <div className="w-full max-w-[600px] bg-white rounded-[32px] p-8 lg:p-12 relative shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => { setShowUploadModal(false); setTempUploadingFiles([]); }}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            <h3 className="text-2xl font-bold text-[#333333] mb-1" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Attach Documents</h3>
            <p className="text-[#8A8A8A] text-sm mb-8">Upload up to 10 files to support your application.</p>

            <label htmlFor="file-upload" className="w-full h-44 border-2 border-dashed border-[#00A550]/30 bg-[#F0FDF4] rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#E6F6EE] transition-colors mb-6 group">
              <input type="file" multiple onChange={(e) => handleFileSelect(e.target.files)} className="hidden" id="file-upload" />
              <img src={fileOpen} alt="Upload" className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-[#00A550] font-semibold">Browse and select</p>
            </label>

            <div className="space-y-3 max-h-[180px] overflow-y-auto mb-8 pr-2 custom-scrollbar">
              {tempUploadingFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A550" strokeWidth="2"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                    </div>
                    <div className="truncate">
                      <p className="text-sm font-semibold text-[#333333] truncate max-w-[150px] md:max-w-[250px]">{file.name}</p>
                      <p className="text-[10px] text-[#8A8A8A] uppercase tracking-wider">{file.size}</p>
                    </div>
                  </div>
                  <button onClick={() => setTempUploadingFiles(prev => prev.filter((_, i) => i !== index))} className="p-2 text-red-400 hover:text-red-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>
              ))}
            </div>

            <button 
              onClick={handleUploadConfirm}
              disabled={tempUploadingFiles.length === 0}
              className="w-full h-14 bg-[#00A550] text-white rounded-xl font-bold hover:bg-[#008f44] transition-all disabled:opacity-50 shadow-lg shadow-[#00A550]/20"
            >
              Confirm {tempUploadingFiles.length} {tempUploadingFiles.length === 1 ? 'File' : 'Files'}
            </button>
          </div>
        </div>
      )}

      {/* CSS for custom scrollbar within this page */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #00A55033; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default ApplyForInternshipPage;