import 'react-responsive-modal/styles.css';
import './Reg.css'
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import supabase from '../../config/supabaseConfig';
import Spinner from '../Spinner/Spinner';
import successLogo from '../../assets/sucess.png';
import errorLogo from '../../assets/error.png';


export default function RegisterModal({open, onClose}) {
  const [step, setStep] = useState(1)
  const [fname, setFname] = useState('')
  const [ferr, setFerr] = useState(false)
  const [lname, setLname] = useState('')
  const [lerr, setLerr] = useState(false)
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [phone, setPhone] = useState('')
  const [phoneErr, setPhoneErr] = useState(false)
  const [bizName, setBizName] = useState('')
  const [bizNameErr, setBizNameErr] = useState(false)
  const [address, setAddress] = useState('')
  const [addressErr, setAddressErr] = useState(false)
  const [city, setCity] = useState('')
  const [cityErr, setCityErr] = useState(false)
  const [state, setState] = useState('')
  const [stateErr, setStateErr] = useState(false)
  const [distance, setDistance] = useState('')
  const [distanceErr, setDistanceErr] = useState(false)
  const [category, setCategory] = useState('')
  const [categoryErr, setCategoryErr] = useState(false)
  const [bio, setBio] = useState('')
  const [bioErr, setBioErr] = useState(false)
  const [experience, setExperience] = useState('')
  const [experienceErr, setExperienceErr] = useState(false)
  const [insta, setInsta] = useState('')
  const [instaErr, setInstaErr] = useState(false)
  const [whatsapp, setWhatsapp] = useState('')
  const [whatsappErr, setWhatsappErr] = useState(false)
  const [openMF, setOpenMF] = useState('')
  const [openMFErr, setOpenMFErr] = useState(false)
  const [closeMF, setCloseMF] = useState('')
  const [closeMFErr, setCloseMFErr] = useState(false)
  const [openSS, setOpenSS] = useState('')
  const [openSSErr, setOpenSSErr] = useState(false)
  const [closeSS, setCloseSS] = useState('')
  const [closeSSErr, setCloseSSErr] = useState(false)
  const [coverPhoto, setCoverPhoto] = useState('')
  const [coverPhotoErr, setCoverPhotoErr] = useState(false)
  const [file, setFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSucess] = useState(false)


  const handleChangeFname = (e) => {
    setFname(e.target.value)
    setFerr(false)
  }
  const handleChangeLname = (e) => {
    setLname(e.target.value)
    setLerr(false)
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    setEmailErr(false)
  }
  const handleChangePhone = (e) => {
    setPhone(e.target.value)
    setPhoneErr(false)
  }
  const handleChangeBizName = (e) => {
    setBizName(e.target.value)
    setBizNameErr(false)
  }
  const handleChangeAddress = (e) => {
    setAddress(e.target.value)
    setAddressErr(false)
  }
  const handleChangeCity = (e) => {
    setCity(e.target.value)
    setCityErr(false)
  }
  const handleChangeState = (e) => {
    setState(e.target.value)
    setStateErr(false)
  }
  const handleChangeDistance = (e) => {
    setDistance(e.target.value)
    setDistanceErr(false)
  }
  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
    setCategoryErr(false)
  }
  const handleChangeExperience = (e) => {
    setExperience(e.target.value)
    setExperienceErr(false)
  }
  const handleChangeWap = (e) => {
    setWhatsapp(e.target.value)
    setWhatsappErr(false)
  }
  const handleChangeInsta = (e) => {
    setInsta(e.target.value)
    setInstaErr(false)
  }
  const handleChangeBio = (e) => {
    setBio(e.target.value)
    setBioErr(false)
  }
  const handleChangeOpenMF = (e) => {
    setOpenMF(e.target.value)
    setOpenMFErr(false)
  }
  const handleChangeCloseMF = (e) => {
    setCloseMF(e.target.value)
    setCloseMFErr(false)
  }
  const handleChangeOpenSS = (e) => {
    setOpenSS(e.target.value)
    setOpenSSErr(false)
  }
  const handleChangeCloseSS = (e) => {
    setCloseSS(e.target.value)
    setCloseSSErr(false)
  }
  const handleFileChange = async (e) => {
    setFile(e.target.files[0])
    const file = e.target.files[0]
    const filename = e.target.files[0].name
    const image = await supabase.storage
    .from("images")
    .upload(filename, file, {
      cacheControl: "3600",
      upsert: false,
    });
    const { data } = supabase
      .storage
      .from('images')
      .getPublicUrl(`${image.data.path}`)

    setCoverPhoto(data.publicUrl);
    setCoverPhotoErr(false);
  }
  const stepComplete = () => {
    // First step check
    if(!fname && step === 1){
      setFerr(true)
    }
    if(!lname && step === 1){
      setLerr(true)
    }
    if(!email && step === 1){
      setEmailErr(true)
    }
    if(!phone && step === 1){
      setPhoneErr(true)
    }
    if(step === 1 && fname && lname && email && phone){
      setStep(2)
      setFerr(false)
      setLerr(false)
      setEmailErr(false)
      setPhoneErr(false)
    }

    // Second step check
    if(!bizName && step === 2){
      setBizNameErr(true)
    }
    if(!coverPhoto && step === 2){
      setCoverPhotoErr(true)
    }
    if(!address && step === 2){
      setAddressErr(true)
    }
    if(!city && step === 2){
      setCityErr(true)
    }
    if(!state && step === 2){
      setStateErr(true)
    }
    if(!distance && step === 2){
      setDistanceErr(true)
    }
    if(step === 2 && bizName && address && coverPhoto && city && state && distance){
      setStep(3)
      setBizNameErr(false)
      setCoverPhotoErr(false)
      setAddressErr(false)
      setCityErr(false)
      setStateErr(false)
      setDistanceErr(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(!category){
      setCategoryErr(true)
    }
    if(!experience){
      setExperienceErr(true)
    }
    if(!bio){
      setBioErr(true)
    }
    if(!openMF){
      setOpenMFErr(true)
    }
    if(!closeMF){
      setCloseMFErr(true)
    }
    if(!openSS){
      setOpenSSErr(true)
    }
    if(!closeSS){
      setCloseSSErr(true)
    }
    if(!whatsapp){
      setWhatsappErr(true)
    }
    if(!insta){
      setInstaErr(true)
    }
    if(step === 3 && category && experience && openMF && closeMF && openSS && closeSS && bio && whatsapp && insta){
      setCategoryErr(false)
      setExperienceErr(false)
      setBioErr(false)
      setOpenMFErr(false)
      setCloseMFErr(false)
      setOpenSSErr(false)
      setCloseSSErr(false)
      setWhatsappErr(false)
      setInstaErr(false)
      setIsLoading(true)
      setError(false)
      try {
        const { data, error } = await supabase
          .from('vendorsdata') // Replace with your actual table name
          .insert([{
            fname,
            lname,
            email,
            phone,
            biz_name:bizName,
            cover_photo:coverPhoto,
            address,
            city,
            state,
            category,
            experience,
            openMF,
            closeMF,
            openSS,
            closeSS,
            bio,
            distance,
            insta,
            whatsapp
          }]);
  
        if(data){
          setIsLoading(false)
          setSucess(true)
        }
        if (error) {
          console.error('Error posting data:', error);
          setError(true)
          setIsLoading(false)
        } else {
          setIsLoading(false)
          setError(false)
          setSucess(true)
          setFname('')
          setLname('')
          setEmail('')
          setPhone('')
          setBizName('')
          setAddress('')
          setCity('')
          setState('')
          setDistance('')
          setCategory('')
          setExperience('')
          setWhatsapp('')
          setInsta('')
          setBio('')
          setOpenMF('')
          setCloseMF('')
          setOpenSS('')
          setCloseSS('')
          setCoverPhoto('');
          setFile(null)
          // Reset form fields after successful post
        }
      } catch (error) {
        console.error('Error occurred during data post:', error);
        setError(true)
      }
    }
  }
  return (
    <Modal open={open} onClose={onClose} classNames={{modal:'lg:w-[1000px] md:w-[700px] sm:px-[100px]'}}>
      {!success && !error && <div>
        <h1 className='font-playfair font-[700] text-[20px] text-secondary my-[10px]'>The easiest way to reach new customers </h1>
        <span>Step {step}/3</span>
        <div className='flex w-full'>
          <div className='w-[33.3%] h-[6px] bg-primary'></div>
          <div className={`w-[33.3%] h-[6px] ${step > 1 ? 'bg-primary' : 'bg-[#EFEFEF]'}`}></div>
          <div className={`w-[33.3%] h-[6px] ${step > 2 ? 'bg-primary' : 'bg-[#EFEFEF]'}`}></div>
        </div>
        <form className='mt-[26px] mb-[50px] min-h-[574px]' onSubmit={handleSubmit}>
          {step === 1 &&<div className='flex flex-col gap-[10px]'>
          <h1 className='font-playfair font-[700] text-[18px] text-secondary'>Personal Information </h1>
          <label className='flex flex-col gap-[10px]'>
            <span>Name</span>
            <div className='flex flex-col md:flex-row md:gap-[6%] gap-[10px]'>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${ferr ? 'border-[#FF9494]':'border-[#2A2A2A]'} md:w-[47%] w-full`} placeholder='First name' onChange={(e) => handleChangeFname(e)} value={fname}/>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${lerr ? 'border-[#FF9494]':'border-[#2A2A2A]'} md:w-[47%] w-full`} placeholder='Last name'onChange={(e) => handleChangeLname(e)} value={lname}/>
            </div>
          </label>
          <label className='flex flex-col gap-[10px]'>
            <span>Email</span>
            <div className=''>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${emailErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Enter your email address' onChange={(e) => handleChangeEmail(e)} value={email}/>
            </div>
          </label>
          <label className='flex flex-col gap-[10px]'>
            <span>Phone number</span>
            <div className=''>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${phoneErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Enter your phone number' onChange={(e) => handleChangePhone(e)} value={phone}/>
            </div>
          </label>
          </div>}
          {step === 2 &&<div className='flex flex-col gap-[10px]'>
          <h1 className='font-playfair font-[700] text-[18px] text-secondary'>Business Information </h1>
          <label className='flex flex-col gap-[10px]'>
            <span>Business Name</span>
            <div className=''>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${bizNameErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Enter your business name' onChange={(e) => handleChangeBizName(e)} value={bizName}/>
            </div>
          </label>
          <label className='flex flex-col gap-[10px]'>
            <span>Business location</span>
            <div className='flex flex-col gap-[10px]'>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${addressErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Address ' onChange={(e) => handleChangeAddress(e)} value={address}/>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${cityErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='City/Area' onChange={(e) => handleChangeCity(e)} value={city}/>
              <label className='relative'>
                  <select type="text" className={`cursor-pointer py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${stateErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Select' onChange={(e) => handleChangeState(e)} value={state}>
                        <option>State</option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Federal Capital Territory">Federal Capital Territory</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                  </select>
                  <div className="pointer-events-none absolute top-[16px] right-[10px] flex items-center px-2 text-black ">
                      <svg className="fill-current h-8 w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M8 6l4 4 4-4h-8z" />
                      </svg>
                  </div>
              </label>
            </div>
          </label>
          <label className='flex flex-col gap-[10px]'>
            <span>Business Photo</span>
            <div className='relative'>
              <input type="file" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${coverPhotoErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='' onChange={(e) => handleFileChange(e)} />
              {coverPhoto && <button disabled className="absolute right-[8px] top-[8px] bg-primary rounded-[10px] py-[13px] px-[30px] text-white hover:bg-opacity-70">Uploaded</button>}
            </div>
          </label>
          <label className='flex flex-col gap-[10px]'>
            <span>Event Coverage</span>
            <div className=''>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${distanceErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Within Lagos etc' onChange={(e) => handleChangeDistance(e)} value={distance}/>
            </div>
          </label>
          </div>}
          {step === 3 && <div className='flex flex-col gap-[10px]'>
          <h1 className='font-playfair font-[700] text-[18px] text-secondary'>Service Details </h1>
          <label className='flex flex-col gap-[10px] relative'>
            <span>Service category</span>
              <select type="text" className={`cursor-pointer py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${categoryErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Select category' onChange={(e) => handleChangeCategory(e)} value={category}>
                    <option>Select category</option>
                    <option value={"Catering"}>Catering</option>
                    <option value={"Photography"}>Photography</option>
                    <option value={"Entertainment"}>Entertainment</option>
                    <option value={"Decoration"}>Decoration</option>
                    <option value={"Venues"}>Event venues</option>
              </select>
              <div className="pointer-events-none absolute top-[50px] right-[10px] flex items-center px-2 text-black ">
                  <svg className="fill-current h-8 w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M8 6l4 4 4-4h-8z" />
                  </svg>
              </div>
          </label>
          <label className='flex flex-col gap-[10px]'>
            <span>Brief description</span>
              <textarea type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${bioErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Briefly describe the type of service you provide' onChange={(e) => handleChangeBio(e)} value={bio}/>
          </label>
          <label className='flex flex-col gap-[10px]'>
            <span>Buisness hour(Mon-Fri)</span>
            <div className='flex flex-col md:flex-row md:gap-[6%] gap-[10px]'>
              <div className='flex flex-col gap-[5px] w-full'>
                <span>Opening</span>
              <input type="time" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${openMFErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} md:w-[47%] w-full`} placeholder='First name' onChange={(e) => handleChangeOpenMF(e)} value={openMF}/>
              </div>
              <div className='flex flex-col gap-[5px] w-full'>
                <span>Closing</span>
              <input type="time" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${closeMFErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} md:w-[47%] w-full`} placeholder='Last name'onChange={(e) => handleChangeCloseMF(e)} value={closeMF}/>
              </div>
            </div>
          </label>
          <label className='flex flex-col gap-[10px]'>
            <span>Buisness hour(Sat & Sun)</span>
            <div className='flex flex-col md:flex-row md:gap-[6%] gap-[10px]'>
              <div className='flex flex-col gap-[5px] w-full'>
                <span>Opening</span>
              <input type="time" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${openSSErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} md:w-[47%] w-full`} placeholder='First name' onChange={(e) => handleChangeOpenSS(e)} value={openSS}/>
              </div>
              <div className='flex flex-col gap-[5px] w-full'>
                <span>Closing</span>
              <input type="time" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${closeSSErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} md:w-[47%] w-full`} placeholder='Last name'onChange={(e) => handleChangeCloseSS(e)} value={closeSS}/>
              </div>
            </div>
          </label>
          <label className='flex flex-col gap-[10px] relative'>
            <span>Years of Experience</span>
              <select type="text" className={`cursor-pointer py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${experienceErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Select' onChange={(e) => handleChangeExperience(e)}>
                    <option>Select </option>
                    <option value={"<1 year"}>Less than a year</option>
                    <option value={"2 years"}>2 years</option>
                    <option value={"3 years"}>3 years</option>
                    <option value={"4 years"}>4 years</option>
                    <option value={">5 years"}>More than 5 years</option>
              </select>
              <div className="pointer-events-none absolute top-[50px] right-[10px] flex items-center px-2 text-black ">
                  <svg className="fill-current h-8 w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M8 6l4 4 4-4h-8z" />
                  </svg>
              </div>
          </label>
          <label className='flex flex-col gap-[10px]'>
            <span>Social media profiles(optional)</span>
            <div className='flex flex-col gap-[10px]'>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${instaErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='Instagram' onChange={(e) => handleChangeInsta(e)} value={insta}/>
              <input type="text" className={`py-[16px] px-[20px] rounded-[10px] border border-[0.5] ${whatsappErr ? 'border-[#FF9494]':'border-[#2A2A2A]'} w-full`} placeholder='WhatsApp' onChange={(e) => handleChangeWap(e)} value={whatsapp}/>
            </div>
          </label>
          </div>}
          <div className='w-full flex justify-center mt-[20px]'>
          {step === 3 && !isLoading && <button className="bg-primary rounded-[10px] py-[13px] px-[30px] text-white hover:bg-opacity-70">Submit</button>}
          {step === 3 && isLoading && <button disabled className="bg-primary rounded-[10px] py-[13px] px-[20px] text-white bg-opacity-70 flex gap-[5px]">
          <span>Submit</span>
          <Spinner h={20} w={20}/>
            </button>}
          </div>
        </form>
        <div className='flex justify-between w-full'>
          {step > 1 && <button className='text-[#B1B1B1] font-[700] font-lato'  onClick={() => setStep(step-1)}>Back</button>}
          {step<3 &&<button className='text-primary font-[700] font-lato flex justify-end w-full' onClick={stepComplete}>Next</button>}
        </div>
      </div>}
      {success && !error &&<div className='flex flex-col items-center justify-center gap-[30px] py-[30px] '>
        <img src={successLogo} alt="success" />
        <h2 className='font-playfair md:text-[30px] text-[20px] font-[700] text-primary'>Registration Received!</h2>
        <p className='font-lato font-[400] md:text-[18px] text-[16px] text-body-text-2 text-center'>Thank you for registering as a vendor on VendorFinder! Your information has been received and will be reviewed shortly. Expect a confirmation email within the next 24 hours.</p>
      </div>}
      {error && !success && <div className='flex flex-col items-center justify-center gap-[30px] py-[30px] '>
        <div className='flex items-center justify-center p-[50px] rounded-[50%] shadow'>
          <img src={errorLogo} alt="error" />
        </div>
        <h2 className='font-playfair md:text-[30px] text-[20px] font-[700] text-primary'>Oops! Something Went Wrong</h2>
        <p className='font-lato font-[400] md:text-[18px] text-[16px] text-body-text-2 text-center'>We apologize for the inconvenience, but it seems there was an error processing your registration. Please double-check the information you entered and try again.</p>
        <button className="bg-primary rounded-[10px] py-[13px] px-[30px] text-white hover:bg-opacity-70" onClick={() => {
          setError(false)
          setSucess(false)
        }}>Try again</button>
      </div>}
    </Modal>
  )
}