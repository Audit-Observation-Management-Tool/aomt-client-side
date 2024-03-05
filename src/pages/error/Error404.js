import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }

    return (
      <div className="w-full h-[422px] relative">
        <section className="absolute h-full w-full top-[100px] left-[0px] capitalize text-center flex items-center text-xl text-gray-200 font-roboto">
          <span className="w-full">
            <p className="m-0">
              <span>
                <b className="text-[140px] font-roboto">404</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>
                  <span className="text-41xl">Not Found</span>
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>
                  <span className="text-41xl">&nbsp;</span>
                </span>
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[25px]">
                <span>
                  <span>The page requested cannot be found in the server.</span>
                </span>
              </span>
            </p>
            <p className="m-3 text-seagreen-100">
              <span className="leading-[30px]">
                <span className="font-medium hover:cursor-pointer hover:text-seagreen-200"
                    onClick = {goToHome}
                >Return to Home.</span>
              </span>
            </p>
          </span>
        </section>
      </div>
    );
  };
  
  export default Error404;  