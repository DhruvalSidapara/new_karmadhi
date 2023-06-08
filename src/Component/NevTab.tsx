import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  title1: string;
  title2: string;
  hide: boolean;
}

const NevTab: React.FC<Props> = ({ title, title1, title2, hide }) => {
  return (
    <>
      <div className="d-flex align-items-center mainLinkBox">
        <div className="linkBox">{title && <Link to="/"> {title} </Link>}</div>
        <span>
          <img src="./img/icone/ChevronRight.png" />
        </span>
        <div className="linkBox">
          {title1 && (
            <Link to="/ourservice" className={hide ? "" : "active"}>
              {" "}
              {title1}{" "}
            </Link>
          )}
        </div>
        {hide && (
          <>
            <span>
              <img src="./img/icone/ChevronRight.png" />
            </span>
            <div className="linkBox">
              {title2 && (
                <Link to="#" className={hide ? "active" : ""}>
                  {" "}
                  {title2}{" "}
                </Link>
              )}
            </div>
          </>
        )}
      </div>
      {/* <div className='d-flex align-items-center mainLinkBox'>
                <div className='linkBox'>
                    <Link to='/'> Home</Link >
                </div>
                <span>
                    <img src='./img/icone/ChevronRight.png' />
                </span>
                <div className='linkBox'>
                    <Link to='/ourservice' className={hide ? '' : 'active'}> Service </Link >
                </div>
                {hide &&
                    <>
                        <span>
                            <img src='./img/icone/ChevronRight.png' />
                        </span>
                        <div className='linkBox'>
                            <Link to='/softwaretesting' className={hide ? 'active' : ''}> Software testing </Link>
                        </div>
                    </>
                }
            </div> */}
    </>
  );
};

export default NevTab;
