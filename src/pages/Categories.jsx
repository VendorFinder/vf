import { useState } from "react"
import Data from "../components/Categories/Data"
import DataSection from "../components/Categories/DataSection"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted');
    setSearch(true)
  }
  return (
    <div>
      <NavBar />
      <main className="max-w-[1400px] mx-auto mb-[78px]">
        <section className="flex justify-center h-[475px] items-center bg-secondary mb-[50px]">
          <div className="font-playfair w-[90%] mx-auto text-center">
            <h1 className="font-[700] md:text-[40px] text-[35px] text-[#FFFFFF]">Seamless Event Planning Starts Here</h1>
          </div>
        </section>
        <section className="my-[50px] flex flex-col gap-[50px] justify-center w-[60%] mx-auto text-center">
            <span className="font-lato font-[400] text-[20px]">Find your ideal vendors for a spectacular event...</span>
            <form onSubmit={handleSubmit} className="relative">
              <label>
                <input type="text" placeholder="Search for vendor..."  className="py-[20px] px-[20px] rounded-[10px] border border-[0.5] border-[#2A2A2A] w-full" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}/>
              </label>
              <button className="absolute right-[8px] top-[8px] bg-primary rounded-[10px] py-[13px] px-[30px] text-white hover:bg-opacity-70">Search</button>
            </form>
        </section>
        <section className="md:px-[100px] px-[30px] mt-[131px]">
          {!search && <DataSection/>}
          {search && <div className="flex flex-col gap-[50px] ">
            <div className="flex justify-start">    
            <button className="font-[600] font-lato text-[16px] text-[#0C4E8B] rounded-[10px] py-[10px] px-[20px] border border-[#0C4E8B] hover:bg-[#0C4E8B] hover:text-[#fff]" onClick={() => setSearch(false)}>
                    Back
            </button>
            </div>
          <Data searchQuery={searchQuery}/>
          </div>}
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default Categories