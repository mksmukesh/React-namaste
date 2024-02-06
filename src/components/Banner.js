const Banner=(props)=>{
    const {bcard}=props
    // console.log("Banner")
    return(

        <div className="rounded-md">
             
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+ bcard?.imageId}>

            </img>
            {/* <h2>{bcard?.action?.text}</h2> */}
        </div>




    )

}
export default Banner;