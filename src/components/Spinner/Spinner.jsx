import { Oval } from "react-loader-spinner";

export default function Spinner({h, w}) {
  return (
    <div className="flex justify-center items-center w-full">
      <Oval
        height={h}
        width={w}
        color="#0C4E8B"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#0C4E8B"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  )
}