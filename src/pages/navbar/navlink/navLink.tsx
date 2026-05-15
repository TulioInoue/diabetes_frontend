import style from "./navLink.module.css";

import { useState } from "react";

interface NavbarLinkInterface {
  path: string;
  pathName: string;
  icon: string;
  children: {
    path: string;
    pathName: string;
    icon: string;
  }[];
}

import { Link, useLocation } from "react-router";

export default function NavbarLink({
  path,
  pathName,
  icon,
  children,
}: NavbarLinkInterface) {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const location = useLocation().pathname;

  return (
    <div className={style.navlink}>
      {children.length ? (
        <div className={style.navlink__content}>
          <div
            className={style.navlink__content__drop}
            onClick={() => setIsExpanded((current) => !current)}
          >
            <div>
              <i className={icon} />
              <p>{pathName}</p>
              <i
                className={
                  isExpanded
                    ? "fi fi-ss-angle-small-up"
                    : "fi fi-ss-angle-small-down"
                }
              />
            </div>
            <hr />
          </div>
          {isExpanded && (
            <div className={style.navlink__content__links}>
              {children.map((child, key) => (
                <Link
                  className={
                    `${path}${child.path}` === location
                      ? style.link_selected
                      : style.link_unselected
                  }
                  key={key}
                  to={`${path}${child.path}`}
                >
                  <i className={child.icon} />
                  <p>{child.pathName}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          className={
            path === location ? style.link_selected : style.link_unselected
          }
          to={path}
        >
          <i className={icon} />
          <p>{pathName}</p>
        </Link>
      )}
    </div>
  );
}
