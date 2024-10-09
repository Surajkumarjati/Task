import React from "react";
import "./Navbar.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative">
          <a className="navbar-brand" href="#">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACUCAMAAADyHdbUAAAAkFBMVEX///80e7v///4rd7qEqtAfcrWPsNb4+/36/Pw2e7meutl2n8yVtdYZb7bt8vhMiMEAarSowd5fkcJCg8DO3OuMsdHS4Oxnl8fA1eaBp9AkdbXG2ez///rP4fTa5u7i7PS2zeGzzelaj8Wsw9qXtdC90+vR5esAZ7UAXL9Jgbcsd8Hu9fI6grjX6PdXibhxm8EY51/eAAAJe0lEQVR4nO1dDXujqhJGRqqYoCYaYyxHrbabu83Z7f//dxfQfEM+mtiY5/j22W1rdZhXYBgGmCA04AhY/HNdd/Pz04Hn6WT84k3S4vn0x+IrmU2BEEYIrWb5oxW6FhgjLwKwLGoJAAQTlz9ap6uA3QVTujegALbzaJ2ugmsTC1rVKZVUQvuZ6gCXmVI/y4IqEBRkMwrfuPtovS4ERsVU6U+qOsnjepo1HcF/FluEcU2UyiNlfHAxYrI7k/dHK3YxfFUBUOVcDgCY+6pB0egJ+jGXDYjHTQV4aD0CT5hi9IG4GCBc3OOmhFd5msa2IhC9rhXFhbKpdPFPmuY90F8pgA+hrvt2xhhpTFD0a2M3/WZQAMZYNnO4Guj2JaBWwM8Q4NqSpAp1uB2+aLr5Ux5uBzUyuU5sF3DzcnIMaXJGn1sCMN48MGNbAjCSdtY7fr78IYcJ83JKpVk/gFUKxRr732oa5LJHi9daEGuXgIvRPyEcSbBoVaLuOwj2R+GOljv+ziEBwSBRjfvX3n1rAtQ6AoRzp/N25FfsuGRF4OOQgPCGxnEejz/3LzYELA0B4TmNOh6uXWSHupIljglYFpM4eM0jx0hAdPGZ2ykDXgA1EIh0BDQ4TQCipEv9hZ00anjcB/TIRsIpjU0ELPbRLYGZWcM7EfC6dboXWw0PrGCmCLAj83qIbC4JLA/M6A8RwMhui6LZdHwA2Xjrw4salKIPFC/7196DVn/6UwQsNv62tdB5PSP4aQLkxUGH3pzGxTsG0t33AALZyx2nJ48gQAYCe3IHApcWNBAwyB0IXFrQQMAgdyBwaUEDAYPcgcClBQ0EDHIHApcWNBAwyB0IXFrQQMAgdyBwaUEDAYPc3hDAuJ772MXcPYO9Jb3+EMArL1t+IMRfZ+cQc74jtycEsDumTNQAKirGyEmEoxXekdsPAhx5wKocI5xHBLJTAMFzV24vCHD0Tj6DWN7H6+k5lO6u3EcTwG4tfp2I1163NzoauO7uL6hXTejtf7/jCdDN6rzj62HYpfBwAtjNPhlQsmhfq7MImQ7E1jJ4PAGO69CipFpfywPdSrzAUqteHwisAgLRersGXs2XYRiysAFrf2Lhcqpdx348AWE5y2UWby8UqRaxfySzHwQEnI949+WeWiHTyO0BASy9mx3L+HQEbpM7ELi0oIGAQe5A4NKC/gMEWkt52Z6JPhJAYqqoNitern+/COR14+k/aw3EwbIU3/zkDHKnXxOa9Q3JvwwKjBpv9BSWttMrAs12JxRHzEolj+Dc7j8yLXaf7gEBeVojsRjUcs61sml0GnTs9qkGsCvnMnGQway5XMTnsOK7ch9NAJVC86QCmKu9z/jEkbG1Edo9yfF4AvjPEqIIIPLb++pKj9eeTurFH4hFIUta25iIGbJu0ythK51+jyfg8sICGdVq328eEG1EkVDtpPjxBIT/4IXE2zRrt7b1SHsa2BJ/8u2xvxlcuasLLQroZ8V9IICw833/uhcEbpM7ELi0oIGAQe6IPDuBZ6+Bv2L+wBjAjx1BuS8BF/tFkZTeV/SkNbCVn7yXXZ77voSA7xhC0HuCNCNye63Tg3znCfB4PpPfzm01WB0/jX/gTPQFk/rfoVwoy0fT+SkEM/1STdc4S+AXBUsu1EyYOnNJKez9T1WqDyDhpJ0Qq5Pp8oc2iQ9GqNPzuOe2GiRLgFJOJycnTvRlWfVn+8gq8RYByBVAaz4rL+pAnRCQbxAnmWV56nIxXtiLI9jymr0YF9xRwpAfzwLGWCMTgIXZqMxlYK8rGuYppTdZofg3IW0SmwsU4NgpRxbZjx8BIcE40Rqpbgkg+mlPKoBpO6l3XkvdKmuZbEcpno5IZh0DWOB11sNPhFWYTIaUraNtaUT1iJuAC+bOOzUF7wDmSUeN6ERUQqpDNivFniZrgTx0G7YJYrA/NRzNbymU3eTyORGViFlrgBRSQ0AxyBuKOWWmo+0S1FqOf5gAdu3Mc9YEsJu86pC2TSy3zsV+gXldWNQTwV3up/5OWgu9GWkHqaI6p7+oAzbpwBSd3fS3JaB9nCtvpxh9nnv9TB65L/ndKdzDncbumJysAGDT94XwO5rUJvfFXQjExKw8FQborzycX8pGtLh7N7iZgBhi/ekJAlZW1Vg44/FcdnPQByIfS0AMeWb7CdFY5mV06kgVA9N7z85uJ4BQZNhNJ8AC4WqIQdqG9h72we/bDW7vA/zVmFzGYnYhBhTkzzeDNFTovrlibibgornZA5qoHGnFbnqTsLivS3F7E/JNDQiiJitMXu32ceb1jAD6AH0NQPCqhsFiTvYv960PzPQ1ILeciv6LV6N9G0thdU/970BgriUAtNlyiu2DMYJm982XdDMBf70FgVKQ8/gGmfWK2jHikBp96xeBQhIQyou577T0J82UEqCWXRXzPDvqISphY48IqE0gYAWj0pevfKxaDBlzLG2NL7zswwYGsz4RwA2BYFI0gUTuiD5LidyeIP1sLzsiANZL/whAtd1oI36ntNnzznVbdD5prwi0fcDa7nXiE1g2h1Yc59ACqRqgY7Owb+AOBGQbIV/O+hDZqqpa0bEuSGSBKTfm93AzAUclEAb2tw1dubwsGiqO3kmC9IS063H7QDZqeilMi81qhsoxj1J9nAiKu2arvp1Aa/qtz6/d8CHmyLDJ7nfP3GmUtxlVKbw42yA0xol+mkC++ubM8U1ADmqM164yR1/aCqBh2jMCLnpv2zq14M8m7INzbfsRTobTHQHb952rvnyV7dhn69E2i9brTBzrc1BS4t152W8n1yKNgisRyUaPub2JSjBvvV/WEGsEqzin0bcJKJfyOoRvUgDPtx4nVT4Rws5Yb4JYByFqQ1GXACpXxkZdbxt0eJFVgpyx4YGgg0TO5fcJNClV0TbsIKpCTsTKuWmeX98//y7G9NTCxGnAVG03xq+/128BAs+mhkgjwMKwRfA2pOyGRtROr+rN+oaYmZluzuad7PrAyDMuzp0nECRILQJ7p+K7CpRUHX16DcblnBD10SDXQnihI3WkG7vvzBwhVWBVd+mbsV++TK8dBBT+DaJajWbYnWQn65HNO8wkL8o3nZi/AKhdiCqpaZ1G1pT9BB84UowMlUCBpo//lIgzcDnnOK00gVKAaLbqet/TveCWi4Cw9VxYOifMmo5l6+99DSgIL3SV1C/TJkc+CyH4ek8Lzp/mI4+aLXJOkcSvb3Vdxknhu8h8br3XEFrf+OL/DxM6zZBPhBR5AAAAAElFTkSuQmCC" alt="Logo" width="30" height="30" />
            
          </a >
          <div class="nav3" className="">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
          </div>
          <div className="position-absolute end-0">
          <button className="btn btn-outline-primary " id="login2">Login</button>
          <span></span>
          <span></span>
            <button className="btn btn-primary " id="login">Register</button>
       
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero text-center">
        <div className="container">
          
        <img src="data:image/jpeg;base64,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" alt="Logo" width="1000px" height="800px"     />
        <h3 className="  bg" >The largest community of photo enthusiasts</h3>
          <button className="btn btn-primary mt-3">Join Today</button>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <h4>Sed ut perspiciatis</h4>
              <p>
                Nemo enim voluptatem quia voluptas sit aspernatur aut odit aut.
                
              </p>
              <button className="btn btn-primary mt-3">Learn more</button>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Lorem ipsum dolor</h4>
              <p>
                Amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <button className="btn btn-primary mt-3">Learn more</button>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Nemo enim ipsam</h4>
              <p>
                Consequatur magni dolores eos qui ratione voluptatem sequi.
              </p>
              <button className="btn btn-primary mt-3">Learn more</button>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Tempor incididunt</h4>
              <p>Eos qui ratione voluptatem sequi nesciunt.</p>
              <button className="btn btn-primary mt-3">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      
      <div>
      <div className="App">
      {/* Call to Action Section */}
      <section className="cta py-5">
        <div className="container text-center">
          <h2>Have you ever posted any photo on social media?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div className="row mt-5">
            <div className="col-md-6 text-left">
              <div className="feature-item">
                <h4>Sed ut perspiciatis</h4>
                <p>
                  Nemo enim voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur.
                </p>
              </div>
              <div className="feature-item">
                <h4>Lorem ipsum dolor</h4>
                <p>
                  Amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="feature-item">
                <h4>Nemo enim ipsam</h4>
                <p>
                  Consequatur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <img
                src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQMREz8nhN1jpE9tk_GibiXYk0bRO0iReQGoa7G1Sjmrm9ypq8JKrcrNJuSapknesejwtlCp6mZQv1ihFuKbF-6M8k3QJYQXpYeLOjsng"
                alt="City"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
      </div>


      <div className="App">
      {/* Section: Make Your Photos More Stylish */}
      <section className="stylish-photos py-5">
        <div className="container text-center">
          <h2>Make your photos more stylish</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          {/* Cards */}
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOjWTBaU1lYQ211b99ulnzyc3PtTw9B_NAlofbqGvQMT3OvsqTLBJEEKQ4y1MC0ihA7g&usqp=CAU"
                  className="card-img-top"
                  alt="Stylish Photo 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Sed ut perspiciatis</h5>
                  <p className="card-text">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt="Stylish Photo 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Lorem ipsum dolor</h5>
                  <p className="card-text">
                    Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt="Stylish Photo 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Nemo enim ipsam</h5>
                  <p className="card-text">
                    Consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>





    



    </div>

      




  );
}

export default App;