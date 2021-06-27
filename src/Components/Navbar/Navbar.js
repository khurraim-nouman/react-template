import './Navbar.css'

const Navbar = () => {
    return (
      <div className='container-fluid px-0'>  
        <nav>
            <div className='row'>

                    <div className='col-sm-12 col-md-12 col-12 d-flex'>
                    
                    <button>
                        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
                    </button>

                    <img
                    alt="Not Found"
                    src='https://image.flaticon.com/icons/png/128/944/944098.png'
                    className='img-fluid' />

                    <i class="fa fa-bell fa-2x mx-2" aria-hidden="true"></i>
                    <i class="fa fa-envelope-open-o fa-2x mx-2" aria-hidden="true"></i>

                    
                    <div className='btnSide'>
                            <button className='btn btn-primary'>See Connected</button>
                        </div>

                    </div>

                    
                    

            </div>
        </nav>
      </div>
    );
}

export default Navbar;