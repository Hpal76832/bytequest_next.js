import Image from "next/image"


function Product({posts}) {

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4" style={{color:'white',padding:'10px 40px 20px 40px'}}>
       
        {posts.map((e,i)=>i<8 && <div className="col" style={{height:'350px'}} key={i}>
            <div className="card h-100">
                <Image src={"/images.jpeg"} className="card-img-top" alt="..." height='200' width='200'/>
                <div style={{backgroundColor:'black',height:'280px'}}>
                    <h6 className="card-title" >{e.Name}</h6>
                    <span style={{fontSize:'10px'}}>{e.Reviews.length<300?e.Reviews: null}</span>
                </div>
            </div>
        </div>)}
        
</div>
)
}






export default Product

  

  