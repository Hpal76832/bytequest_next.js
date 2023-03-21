import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsFillBagFill,BsHandbag,BsLaptop } from 'react-icons/bs';
import { GiShoulderBag } from 'react-icons/gi';


function Items() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 500 },
            items: 5
          }
      };
  return (
    <div style={{padding:'70px 0 10px 30px',color:'white'}}>
        <Carousel responsive={responsive}>
            <div>
                <BsFillBagFill size={60}/>
                <h6 style={{padding:'10px 0 0 0',fontWeight:'20',fontSize:'12px'}}>Shopping Bag</h6>
                </div>
            <div>
                <BsHandbag size={60}/>
                <h6 style={{padding:'10px 0 0 0',fontWeight:'20',fontSize:'12px'}}>Hand Bag</h6>
                </div>
            <div>
                <GiShoulderBag size={60}/>
                <h6 style={{padding:'10px 0 0 10px',fontWeight:'20',fontSize:'12px'}}>Sling Bag</h6>
                </div>
            <div>
                <BsLaptop size={60}/>
                <h6 style={{padding:'10px 0 0 10px',fontWeight:'20',fontSize:'12px'}}>Laptop</h6>
                </div>
            <div>
                <BsFillBagFill size={60}/>
                <h6 style={{padding:'10px 0 0 10px',fontWeight:'20',fontSize:'12px'}}>hello</h6>
                </div>
            <div><
                BsHandbag size={60}/>
                <h6 style={{padding:'10px 0 0 10px',fontWeight:'20',fontSize:'12px'}}>hello</h6>
                </div>
            <div><
                GiShoulderBag size={60}/>
                <h6 style={{padding:'10px 0 0 10px',fontWeight:'20',fontSize:'12px'}}>hello</h6>
                </div>
            <div>
                <BsLaptop size={60}/>
                <h6 style={{padding:'10px 0 0 10px',fontWeight:'20',fontSize:'12px'}}>hello</h6>
                </div>
        </Carousel>
    </div>
    
  )
}

export default Items


