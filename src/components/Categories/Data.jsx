import { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Call, WhatsApp } from "@mui/icons-material";

import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://qxcpqnkhmkujrodoagff.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4Y3BxbmtobWt1anJvZG9hZ2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNjc3MzYsImV4cCI6MjAwMTc0MzczNn0.dJi1yNIosATsj9Ew5APzka7gaBzXpKbe3gRjQQeIxYs");

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import locationIcon from '../../assets/about/locationIcon.svg'


export default function Data({cat, searchQuery}) {
  const [data, setData] = useState([])
  const [profile, setProfile] = useState([])
  const [error, setError] = useState('')
  const [id, setId] = useState('')
  const [open, setOpen] = useState(false);

  const onOpenModal = (id) => {
    setId(id)
    setOpen(true)
  };
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
   const getData = async() => {
      let query = supabase.from('vendorsdata').select()

      if(cat){
        query = query.eq('category', cat)
      }
      if (searchQuery) {
        query = query.or(`fname.ilike.%${searchQuery}%,lname.ilike.%${searchQuery}%,biz_name.ilike.%${searchQuery}%,address.ilike.%${searchQuery}%,insta.ilike.%${searchQuery}%,city.ilike.%${searchQuery}%,state.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%,bio.ilike.%${searchQuery}%`);
      }
      const {data, error} = await query
      if(data){
        setData(data);
        setError('')
      }
      if(error){
        setError(error)
      }
    }
    getData();
  }, [cat, searchQuery]);

  useEffect(() => {
    const filteredData = data.filter(item => item.id === id);
    setProfile(filteredData)
  }, [id])
console.log(profile);
  return (
    <div className="flex flex-wrap gap-[50px]">
      {data && data.map(d => (
        <div className="flex flex-col gap-[20px] items-start w-[30%] bg-[#DEF2F5] rounded-[10px] p-[15px]" key={d.id}>
          <img className="rounded-[10px] h-[176px]" src={d.cover_photo} alt="" />
          <div>
            <span className="font-playfair font-[700] text-[20px]">{d.biz_name}</span>
            <div className='flex gap-[8px]'>
              <img src={locationIcon} alt="location" />
              <span>{d.address}</span>
            </div>
          </div>
          <p>{d.bio.split(' ').slice(0, 10).join(' ')}...</p>
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
                <img src={locationIcon} alt="location" />
                <span>{profile[0].address}</span>
              </div>
            </div>
          <img className="min-h-[250px]" src={profile[0].cover_photo} alt="" />
          <div className="flex flex-col gap-[12px]">
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">Owner: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].fname} {profile[0].lname}</span></p>
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">Business name: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].biz_name}</span></p>
            <p className="font-playfair font-[400] text-[15px] text-body-text-2">Service offered: <span className="font-lato font-[600] text-[18px] text-body-text-1">{profile[0].category}</span></p>
          </div>
          <div>
            <span className="font-playfair font-[600] text-[18px] text-primary">Bio</span>
            <p className="leading-8 text-[18px] text-body-text-2">{profile[0].bio}</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="font-playfair font-[600] text-[18px] text-primary">Business Hours</span>
            <div className="flex flex-col gap-[5px]">
              <span className="font-lato font-[500] text-[18px] text-body-text-1">Monday - Friday</span>
              <span className="font-lato font-[400] text-[18px] text-body-text-2">{profile[0].biz_hour_wd}</span>
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="font-lato font-[500] text-[18px] text-body-text-1">Saturday & Sunday</span>
              <span className="font-lato font-[400] text-[18px] text-body-text-2">{profile[0].biz_hour_wk}</span>
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
          </div>
          </div>
      </Modal>}
    </div>
  )
}