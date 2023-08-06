import React,{ useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import ThemeSwitcher from './ThemeSwitcher';
import './header.css'
import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkRouter,Navigate} from 'react-router-dom';
//About
import './About.css'
import './bgcomp.css'
import { FaJira,FaFaucet,FaSeedling } from "react-icons/fa";
//card
import'./card.css'

function Header() {
    const [goToLogin,setGoToLogin] = React.useState(false); 

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const [show,setShow]=React.useState(true)
    const [show2,setShow2]=React.useState(true)
    const [show3,setShow3]=React.useState(true)

    if (goToLogin){
        return <Navigate to="/Login"/>;
    }

    return(
    <div className='dark:bg-[#34495E]' id='header'>
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#">Co2exchange</a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className='menu-link' onClick={closeMobileMenu}>
                             <LinkScroll to="about" spy={true} smooth={true} offset={50} duration={500}>ABOUT</LinkScroll>
                        </li>
                        <li className='menu-link' onClick={closeMobileMenu}>
                            <LinkScroll to="card" spy={true} smooth={true} offset={50} duration={500}>USE</LinkScroll>
                        </li>
                        <li className='menu-link'onClick={closeMobileMenu}>
                               <button onClick={()=>{setGoToLogin(true)}}>
                                {""}LOGIN
                               </button>
                        </li>
                        <ThemeSwitcher/>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ?(
                            <FiX/>
                        ):(
                            <FiMenu/>
                        )}
                    </div>
                </div>
            </div>
        </div>

                <div className=' mx-auto columns-2 gap-8  text-white flex mb-[50px] ' id='about'>
                    <div className='w-[800px] absoulte  h-[80vh]  text-start flex flex-col justify-center col-start sm:px-6 ml-20'>
                                <h1 className='text-black md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 dark:text-white' >REC X PLATFORM </h1>
                                <p className='bg-gradient-to-r from-[#00C9FF] to-[#00467F] text-transparent bg-clip-text font-bold p-1 md:text-2xl'>มิติใหม่แห่งการแลกเปลี่ยนคาร์บอน</p>
                                <p className='text-slate-500 w-[350px] p-1 md:text-[15px] sm:text-[10px]'>คาร์บอนเครดิต หมายถึง สิทธิที่เกิดจากการลดปริมาณการปล่อยก๊าซคาร์บอนไดออกไซด์  ก่อนจะถูกขายเป็นเครดิตให้กับองค์กรอื่นได้</p>
                            <div className='col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
                                <a  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"href="#">
                                        <span>
                                        เริ่มต้นลงชื่อเข้าใช้งาน
                                        <span aria-hidden="true" className='hidden text-slate-400 sm:inline'>
                                            →
                                        </span>
                                        </span>
                                </a>
                            <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15  dark:bg-[#00df9a] "href="#">
                                    <span className='dark:text-white'>
                                    วิธีการใช้งานเว็บไซต์
                                    <span aria-hidden="true" className='hidden text-slate-400 sm:inline dark:text-white'>
                                        →
                                    </span>
                                    </span>
                            </a>
                            
                            </div>
                    
                
                </div>
                
                <div className='  w-[500px] h-[80vh] justify-center flex flex-col pl-[30px] items-center'>

                
                
                <div className='col-start-1 row-start-4 mt-2 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0' >
                {
                    show? <button className='circle1'>
                    <div className='flex flex-col items-center justify-center text-black text-2xl'>
                        <FaJira/>
                    </div>
                    </button>:null
                }
                <button className='rndbg' onClick={()=>setShow(!show)}>
                    </button>
                </div>
                <div className='col-start-1 row-start-4 mt-2 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mr-[150px]' >
                
                <button className='rndbg1'  onClick={()=>setShow2(!show2)}>
                </button>
                    {
                    show2? <button className='circle1'>
                    <div className='flex flex-col items-center justify-center text-black text-2xl'>
                        <FaFaucet/>
                    </div>
                    </button>:null
                }
                </div>
                <div className='col-start-1 row-start-4 mt-2 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0' >
                {
                    show3? <button className='circle1'>
                    <div className='flex flex-col items-center justify-center text-black text-2xl'>
                        <FaSeedling/>
                    </div>
                    </button>:null
                }
                <button className='rndbg' onClick={()=>setShow3(!show3)}>
                    </button>
                </div>
                
                </div>
                
                <div>

                </div>
            </div>

    <div className='dark:bg-[#34495E] darkw:text-black' id='card'>
        <section className='card-list'>
    <article class="card">
        <header class="card-header">
          <a href="">กิจกรรมและข่าวสาร</a>
          <div></div>
        </header>
        <a  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"href="#">
            <span>
              อ่านเพิ่มเติม
              <span aria-hidden="true" className='hidden text-slate-400 sm:inline'>
                 →
              </span>
            </span>
          </a>
      </article>

      <article class="card">
        <header class="card-header">
          <a href="">
            กิจกรรมชดเชยคาร์บอน
          </a>
        </header>
        <a  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"href="#">
            <span>
              อ่านเพิ่มเติม
              <span aria-hidden="true" className='hidden text-slate-400 sm:inline'>
                 →
              </span>
            </span>
          </a>
      </article>
      <article class="card">
        <header class="card-header">
          <a href="">ตัวชี้วัดธุรกิจคาร์บอนต่ำและยั่งยืน</a>
        </header>
        <a  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"href="#">
            <span>
              อ่านเพิ่มเติม
              <span aria-hidden="true" className='hidden text-slate-400 sm:inline'>
                 →
              </span>
            </span>
          </a>
      </article>
      <article class="card">
        <header class="card-header">
        </header>
        <a  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"href="#">
            <span>
              อ่านเพิ่มเติม
              <span aria-hidden="true" className='hidden text-slate-400 sm:inline'>
                 →
              </span>
            </span>
          </a>
      </article>
      
    
      
   </section>
    </div>
    
            <footer className='py-10 dark:bg-[#34495E]' id='footer'>
            <div className='mx-auto mt-[45px] w-full max-w-container px-4 sm:px-6 lg:px-8 text-center '>
            <h1 className='bg-gradient-to-r from-white to-[#5433FF] bg-clip-text text-transparent   md:text-[40px] sm:text-5xl text-2xl font-bold md:py-6 ' >Co2exchange</h1>
            <p className='text-slate-500'>platform for exchange carbon credit</p>
            <div className='mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700'>
                <a href="">Privacy policy</a>
                <div className='h-4 w-px bg-slate-500/20'></div>
                <a href="">Changelog</a>
            </div>

            </div>
            
        </footer>
    </div>
        
                            

        
    );
}

export default Header