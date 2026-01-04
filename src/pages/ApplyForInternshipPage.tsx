import React, { useState } from 'react';
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
  const [hoveredOption, setHoveredOption] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const techStackOptions = [
    'Front end development',
    'Back end development',
    'UI/UX Design',
    'Full stack engineer',
    'Graphic Design'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    
    const fileArray = Array.from(files);
    const newFiles = fileArray.map(file => ({
      file,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      timeLeft: '3 Seconds left'
    }));
    
    setTempUploadingFiles(prev => [...prev, ...newFiles]);
  };

  const handleUploadConfirm = () => {
    const files = tempUploadingFiles.map(f => f.file);
    setFormData(prev => ({ ...prev, portfolio: [...prev.portfolio, ...files] }));
    setTempUploadingFiles([]);
    setShowUploadModal(false);
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      portfolio: prev.portfolio.filter((_, i) => i !== index)
    }));
  };

  const removeTempFile = (index: number) => {
    setTempUploadingFiles(prev => prev.filter((_, i) => i !== index));
  };

  const isFormValid = () => {
    return formData.fullName && formData.email && formData.phoneNumber && 
           formData.gender && formData.techStack;
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      setErrors({
        fullName: !formData.fullName ? '(Required field)' : '',
        email: !formData.email ? '(Required field)' : '',
        phoneNumber: !formData.phoneNumber ? '(Required field)' : '',
      });
      return;
    }
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#E6F6EE] flex items-center justify-center">
        <div className="bg-white rounded-[20px] p-20 text-center max-w-[600px]">
          <div className="w-[100px] h-[100px] bg-[#00A550] rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M50 15L22.5 42.5L10 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-[32px] font-semibold text-[#333333] mb-4" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Application Submitted Successfully!
          </h2>
          <p className="text-base font-light text-[#545454] mb-8" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Thank you for applying! We'll review your application and get back to you soon.
          </p>
          <Link to="/">
            <button className="bg-[#00A550] text-white px-10 py-3 rounded-[10px]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              Go back to home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-[651px] bg-[#E6F6EE] pt-[65px] pr-[89px] pb-[122px] pl-[89px] flex flex-col gap-10">
        <img src={focusGridLogo} alt="Focus Grid" className="w-[80px] h-[32.77px]" />
        
        <div className="relative w-[432px] h-[397px]">
          <img src={greenCard} alt="Card" className="w-full h-full object-contain" />
          <img src={approval} alt="Approved" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px]" />
        </div>

        <h1 className="text-[40px] font-semibold leading-[120%] text-center text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
          We are Hiring!
        </h1>

        <p className="text-base font-light leading-[140%] text-center text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
          Designers, Developers strategists united by one mission. Together, we turn bold ideas into real solutions.
        </p>

        <Link to="/">
          <button className="w-[400px] h-[62px] border border-[#00A550] rounded-[20px] px-5 py-5 flex items-center justify-center">
            <span className="text-base font-light leading-[140%] text-[#00A550]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
              Go back
            </span>
          </button>
        </Link>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 bg-white p-20 relative">
        <div className="max-w-[600px]">
          <h2 className="text-[32px] font-semibold leading-[140%] text-[#333333] mb-2" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Apply for internship
          </h2>
          <p className="text-base font-light leading-[140%] text-[#333333] mb-10" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
            Please input your Personal info here.
          </p>

          {/* Form Fields */}
          <div className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-[10px]">
              <label className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                First name and last name {errors.fullName && <span className="text-[#F04438]">{errors.fullName}</span>}
              </label>
              <input
                type="text"
                placeholder="John doe"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField('')}
                className={`w-[600px] h-[52px] border rounded px-[15px] text-base font-light placeholder:text-[#8A8A8A] outline-none ${
                  focusedField === 'fullName' ? 'border-[#E6F6EE] bg-[#E6F6EE]' : 'border-[#8A8A8A]'
                }`}
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[10px]">
              <label className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                Email address {errors.email && <span className="text-[#F04438]">{errors.email}</span>}
              </label>
              <input
                type="email"
                placeholder="Johndoe@gmail.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className={`w-[600px] h-[52px] border rounded px-[15px] text-base font-light placeholder:text-[#8A8A8A] outline-none ${
                  focusedField === 'email' ? 'border-[#E6F6EE] bg-[#E6F6EE]' : 'border-[#8A8A8A]'
                }`}
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-[10px]">
              <label className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                Phone number {errors.phoneNumber && <span className="text-[#F04438]">{errors.phoneNumber}</span>}
              </label>
              <div className={`w-[600px] h-[52px] border rounded px-[15px] flex items-center gap-2 ${
                focusedField === 'phone' ? 'border-[#E6F6EE] bg-[#E6F6EE]' : 'border-[#8A8A8A]'
              }`}>
                <div className="flex items-center gap-1 pr-2 border-r border-[#8A8A8A]">
                  <span className="text-base font-light text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>+234</span>
                  <svg width="6" height="4" viewBox="0 0 6 4" fill="none">
                    <path d="M1 0.5L3 2.5L5 0.5" stroke="#333333" strokeWidth="1"/>
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="Input number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  className="flex-1 text-base font-light placeholder:text-[#8A8A8A] outline-none bg-transparent"
                  style={{ fontFamily: 'Funnel Display, sans-serif' }}
                />
              </div>
            </div>

            {/* Gender and Tech Stack Row */}
            <div className="flex gap-[22px]">
              {/* Gender */}
              <div className="w-[196px] flex flex-col gap-[10px]">
                <label className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  Gender
                </label>
                <div className="flex gap-5">
                  <div 
                    className="flex items-center gap-[10px] cursor-pointer"
                    onClick={() => handleInputChange('gender', 'Male')}
                  >
                    <div className="w-[32px] h-[32px] rounded-full bg-white border-2 border-[#8A8A8A] flex items-center justify-center p-[6px]">
                      <div 
                        className={`w-[20px] h-[20px] rounded-full ${
                          formData.gender === 'Male' ? 'bg-[#00A550]' : 'bg-[#E6E6E6]'
                        }`}
                      />
                    </div>
                    <span className="text-base font-light text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Male</span>
                  </div>
                  <div 
                    className="flex items-center gap-[10px] cursor-pointer"
                    onClick={() => handleInputChange('gender', 'Female')}
                  >
                    <div className="w-[32px] h-[32px] rounded-full bg-white border-2 border-[#8A8A8A] flex items-center justify-center p-[6px]">
                      <div 
                        className={`w-[20px] h-[20px] rounded-full ${
                          formData.gender === 'Female' ? 'bg-[#00A550]' : 'bg-[#E6E6E6]'
                        }`}
                      />
                    </div>
                    <span className="text-base font-light text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Female</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack - Fixed */}
              <div className="w-[379px] flex flex-col gap-[10px] relative">
                <label className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  Tech stack
                </label>
                <div className="relative">
                  <select
                    value={formData.techStack}
                    onChange={(e) => handleInputChange('techStack', e.target.value)}
                    onFocus={() => setFocusedField('techStack')}
                    onBlur={() => setFocusedField('')}
                    onMouseOver={(e) => {
                      // Get the currently hovered option
                      const select = e.target as HTMLSelectElement;
                      if (select.options[select.selectedIndex]?.value) {
                        setHoveredOption(select.options[select.selectedIndex].value);
                      }
                    }}
                    className={`w-[379px] h-[52px] border rounded px-[15px] text-base font-light appearance-none outline-none bg-white ${
                      focusedField === 'techStack' ? 'border-[#E6F6EE] bg-[#E6F6EE]' : 'border-[#8A8A8A]'
                    }`}
                    style={{ 
                      fontFamily: 'Funnel Display, sans-serif', 
                      color: formData.techStack ? '#333333' : '#8A8A8A'
                    }}
                  >
                    {/* Disabled option acts as placeholder only */}
                    <option value="" disabled style={{ color: '#8A8A8A', backgroundColor: 'white' }}>
                      Choose here
                    </option>
                    {techStackOptions.map((option, index) => (
                      <option 
                        key={index} 
                        value={option}
                        style={{ 
                          backgroundColor: 'white',
                          color: '#333333'
                        }}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-[15px] top-[16px] pointer-events-none" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="#333333" strokeWidth="2"/>
                  </svg>
                </div>
                
                {/* Custom hover styles using a style tag */}
                <style>
                  {`
                    select option:hover,
                    select option:focus,
                    select option:active,
                    select option:checked {
                      background: #E6F6EE !important;
                      color: #333333 !important;
                    }
                    
                    select option {
                      background: white !important;
                      color: #333333 !important;
                    }
                    
                    /* Remove default blue highlight */
                    select option:checked {
                      background: #E6F6EE !important;
                    }
                  `}
                </style>
              </div>
            </div>

            {/* Upload Portfolio */}
            <div className="flex flex-col gap-[10px]">
              <label className="text-base font-light leading-[140%] text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                Upload your portfolio
              </label>
              <div 
                onClick={() => setShowUploadModal(true)}
                onFocus={() => setFocusedField('portfolio')}
                onBlur={() => setFocusedField('')}
                className={`w-[600px] min-h-[54px] border rounded px-[15px] py-[15px] flex items-center gap-2 cursor-pointer ${
                  focusedField === 'portfolio' ? 'border-[#E6F6EE] bg-[#E6F6EE]' : 'border-[#8A8A8A]'
                }`}
              >
                {/* Updated Upload Icon - Green icon on light gray background */}
                <div className="w-[44px] h-[24px] bg-[#F9F9F9] rounded flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="#00A550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {formData.portfolio.length > 0 ? (
                  <div className="flex gap-2 flex-wrap flex-1 overflow-hidden">
                    {formData.portfolio.map((file, index) => (
                      <div key={index} className="flex items-center gap-1 bg-[#E6F6EE] rounded-[10px] px-2 py-1 flex-shrink-0">
                        <span className="text-sm font-light text-[#00A550] truncate max-w-[100px]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                          {file.name}
                        </span>
                        <button onClick={(e) => { e.stopPropagation(); removeFile(index); }} className="text-[#00A550] flex-shrink-0">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M1 1L9 9M1 9L9 1" stroke="#00A550" strokeWidth="1"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-base font-light text-[#8A8A8A]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                    Upload your portfolio
                  </span>
                )}
              </div>
            </div>

            {/* Done Button */}
            <button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className={`w-[169px] h-[42px] rounded-[10px] px-[10px] py-[10px] ml-auto ${
                isFormValid() ? 'bg-[#00A550]' : 'bg-[#B0B0B0]'
              }`}
            >
              <span 
                className={`text-base font-light leading-[140%] ${isFormValid() ? 'text-white' : 'text-[#E6E6E6]'}`}
                style={{ fontFamily: 'Funnel Display, sans-serif' }}
              >
                Done
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-[778px] bg-white rounded-[20px] p-10 relative max-h-[80vh] overflow-y-auto">
            {/* Close Button - Moved up */}
            <button 
              onClick={() => { setShowUploadModal(false); setTempUploadingFiles([]); }}
              className="absolute top-[10px] right-[41px] w-[24px] h-[24px]"  // Changed from top-[20px] to top-[10px]
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="#545454" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-[24px] font-semibold text-[#545454] mb-1" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  Upload and attach files
                </h3>
                <p className="text-[12px] font-normal text-[#545454]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  Add your documents here, you can add up to 10 files
                </p>
              </div>
              <button 
                onClick={handleUploadConfirm}
                className="w-[127px] h-[42px] bg-[#00A550] rounded-[10px] px-[10px] py-[10px]"
              >
                <span className="text-base font-light text-[#E6E6E6]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                  Upload
                </span>
              </button>
            </div>

            {/* Upload Area */}
            <div className="w-[592px] h-[287px] border-[5px] border-dashed border-[#333333] rounded-[10px] flex flex-col items-center justify-center gap-2 mb-6">
              <img src={fileOpen} alt="Upload" className="w-[80px] h-[80px] object-contain" />
              <p className="text-base font-light text-[#545454]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                Click to upload or drag and drop
              </p>
              <p className="text-sm font-light text-[#545454]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                Maximum size is 50mb
              </p>
              <input
                type="file"
                multiple
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="w-[200px] h-[40px] bg-[#00A550] rounded-[10px] flex items-center justify-center mt-4">
                  <span className="text-white text-sm" style={{ fontFamily: 'Funnel Display, sans-serif' }}>Choose Files</span>
                </div>
              </label>
            </div>

            {/* Uploading Files */}
            {tempUploadingFiles.map((file, index) => (
              <div key={index} className="w-[604px] h-[60px] border border-[#8A8A8A] rounded-[10px] px-5 py-5 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#000000" strokeWidth="2"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#000000" strokeWidth="2"/>
                  </svg>
                  <div>
                    <p className="text-[20px] font-medium text-[#333333]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {file.name}
                    </p>
                    <p className="text-base font-light text-[#333333]" style={{ fontFamily: 'Funnel Display, sans-serif' }}>
                      {file.size} . {file.timeLeft}
                    </p>
                  </div>
                </div>
                <button onClick={() => removeTempFile(index)}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#545454" strokeWidth="1.4"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyForInternshipPage;