import React from 'react'

const MegaMenu = ({megaMenuItem, linkActive, tag}) => {
  console.log({megaMenuItem});
  console.log(tag);
  return (
    <div className='megamenu'>
      <ul className='megamenu__list'>
        {tag}
        {megaMenuItem?.map((item, index) => (
          <li className='megamenu__item' style={{width: `calc(100% / ${megaMenuItem.length})`}} key={index}>
            <a className='megamenu__link' href='#'>{item.subMenuName}</a>
            {/* {item.subMenuChild.length > 0 && (
              <ul>
                {item.subMenuChild.map((item, index) => (
                  <li key={index}>
                    <a href="#">Link</a>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MegaMenu