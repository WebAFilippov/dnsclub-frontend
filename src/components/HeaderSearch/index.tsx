import { useState, useRef, useEffect } from "react";
import cx from "classnames";

import styles from "./HeaderSearch.module.scss";

function HeaderSearch() {
  const inputRef = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={cx(styles.headerSearch, {
          [styles.focus]: focus,
        })}
        ref={inputRef}
      >
        <div className={styles.headerSearchInput}>
          <input
            type="text"
            placeholder="Введите запрос"
            className={styles.searchInput}
            onClick={() => setFocus(true)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="none"
              fillRule="evenodd"
              d="M10.828 4.75a6.078 6.078 0 1 0 0 12.156 6.078 6.078 0 0 0 0-12.156ZM3.25 10.828a7.578 7.578 0 1 1 13.441 4.801l4.161 4.162a.75.75 0 1 1-1.06 1.06l-4.162-4.16a7.578 7.578 0 0 1-12.38-5.862Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default HeaderSearch;
