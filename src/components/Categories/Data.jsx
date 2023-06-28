import { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Call, WhatsApp, Mail } from "@mui/icons-material";

import supabase from "../../config/supabaseConfig";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";


export default function Data({cat, searchQuery}) {
  const [data, setData] = useState([])
  const [profile, setProfile] = useState([])
  const [error, setError] = useState('')
  const [id, setId] = useState('')
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onOpenModal = (id) => {
    setId(id)
    setOpen(true)
  };
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
   const getData = async() => {
      setIsLoading(true)
      setData([])
      let query = supabase.from('vendorsdata').select().eq('approve', true)

      if(cat){
        query = query.eq('category', cat)
      }
      if (searchQuery) {
        query = query.or(`fname.ilike.%${searchQuery}%,lname.ilike.%${searchQuery}%,biz_name.ilike.%${searchQuery}%,address.ilike.%${searchQuery}%,insta.ilike.%${searchQuery}%,city.ilike.%${searchQuery}%,state.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`);
      }
      const {data, error} = await query
      if(data){
        setData(data);
        setError('')
        setIsLoading(false)
      }
      if(data.length === 0){

        console.log('No vendor for this category or search')
      }
      if(error){
        setError(error)
        setIsLoading(false)
      }
    }
    getData();
  }, [cat, searchQuery]);

  useEffect(() => {
    const filteredData = data.filter(item => item.id === id);
    setProfile(filteredData)
  }, [id])
  return (
    <div className="flex flex-wrap gap-[50px]">
      {!isLoading && data.length === 0 && <div className="flex justify-center items-center w-full">
        {!searchQuery && <div><span className="font-playfair font-[700] text-[20px] text-primary">No vendor for this category or search</span></div>}
        {searchQuery && <div className="flex flex-col items-center">
          <span className="font-playfair font-[700] text-[20px] text-primary">No Results Found</span>
          <p className="font-lato font-[400] md:text-[18px] text-[16px] text-text-body-2 text-center leading-8">We're sorry, but it appears that there are no vendors currently available matching your search criteria. Please consider refining your search or try again later as new vendors are continually joining our platform. If you need assistance or have any specific requirements, feel free to <Link to='/' className="text-primary">contact us</Link></p>

        </div>}
        </div>}
      {isLoading && <Spinner h={80} w={80}/>}
      {data && data.map((d, i) => (
        <div className={`flex flex-col gap-[20px] items-start w-full md:w-[50%] lg:w-[30%] ${i%2 === 0 ? 'bg-[#DEF2F5]':'bg-[#F7ECE1]' } rounded-[10px] p-[15px]`} key={d.id}>
          <div className="">
            <img className="rounded-[10px] w-full" src={d.cover_photo} alt="" />
          </div>
          <div>
            <span className="font-playfair font-[700] sm:text-[20px] text-[18px] text-secondary">{d.biz_name}</span>
            <div className='flex gap-[8px]'>
              <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944501/locationIcon_wakk8h.svg"alt="location" />
              <span className="font-lato font-[400] sm:text-[16px] text-[14px] text-secondary">{d.city}, {d.state}</span>
            </div>
          </div>
          <p className="font-[400] font-lato text-body-text-2">{d.bio.split(' ').slice(0, 10).join(' ')}...</p>
          <button className="font-[600] font-lato text-[16px] text-[#0C4E8B] rounded-[10px] py-[10px] px-[20px] border border-[#0C4E8B] hover:bg-[#0C4E8B] hover:text-[#fff]" onClick={() => onOpenModal(d.id)}>
                  View Profile
          </button>
        </div>
      ))}
      {profile[0] && <Modal open={open} onClose={onCloseModal} center>
          <div className="flex flex-col gap-[30px]">
            <div>
              <span className="font-playfair font-[700] text-[20px] text-primary">{profile[0].biz_name}</span>
              <div className='flex gap-[8px]'>
                <img src="https://res.cloudinary.com/dgizre0g1/image/upload/v1687944501/locationIcon_wakk8h.svg" alt="location" />
                <span>{profile[0].city}, {profile[0].state}</span>
              </div>
            </div>
          <img className="min-h-[250px]" src={profile[0].cover_photo} alt="" />
          <div className="flex flex-col gap-[12px]">
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">Owner: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].fname} {profile[0].lname}</span></p>
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">Business name: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].biz_name}</span></p>
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">Service offered: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].category}</span></p>
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">Address: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].address}</span></p>
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">City: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].city}</span></p>
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">State: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].state}</span></p>
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">Years of experience: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].experience}</span></p>
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">Event Coverage: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].distance}</span></p>
          </div>
          <div>
            <span className="font-playfair font-[600] text-[18px] text-primary">Bio</span>
            <p className="leading-8 text-[18px] text-body-text-2">{profile[0].bio}</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="font-playfair font-[600] text-[18px] text-primary">Business Hours</span>
            <div className="flex flex-col gap-[5px]">
              <span className="font-lato font-[500] text-[18px] text-body-text-1">Monday - Friday</span>
              <span className="font-lato font-[400] text-[18px] text-body-text-2">{profile[0].openMF} - {profile[0].closeMF}</span>
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="font-lato font-[500] text-[18px] text-body-text-1">Saturday & Sunday</span>
              <span className="font-lato font-[400] text-[18px] text-body-text-2">{profile[0].openSS} - {profile[0].closeSS}</span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="font-playfair font-[600] text-[18px] text-primary">Contact Details</span>
            <div className="flex gap-[2px]">
              <Call color="#555C69"/>
              <span className="font-lato font-[600] text-[18px] text-body-text-1">- {profile[0].phone}</span>
            </div>
            <div className="flex gap-[5px]">
              <InstagramIcon color="#555C69"/>
              <span className="font-lato font-[600] text-[18px] text-body-text-1">- {profile[0].insta}</span>
            </div>
            <div className="flex gap-[5px]">
              <WhatsApp color="#555C69"/>
              <span className="font-lato font-[600] text-[18px] text-body-text-1">- {profile[0].whatsapp}</span>
            </div>
            <div className="flex gap-[5px]">
              < Mail color="#555C69"/>
              <span className="font-lato font-[600] text-[18px] text-body-text-1">- {profile[0].email}</span>
            </div>
          </div>
          </div>
      </Modal>}
    </div>
  )
}