import React from 'react'

const MegaMenu = ({megaMenuItem, linkActive, tag}) => {
  console.log({megaMenuItem});
  console.log(tag);
  return (
    <div className='megamenu'>
      <ul className='megamenu__list'>
        {megaMenuItem?.map((item, index) => (
          <li className='megamenu__item' style={{width: `calc(110% / ${megaMenuItem.length})`}} key={index}>
            <a className='megamenu__link' href='#'>{item.subMenuName}</a>
            {item.subMenuChild.length > 0 && (
              <ul className='megamenu__sublist'>
                {item.subMenuChild.map((item, index) => (
                  <li className='megamenu__subitem' key={index}>
                    <a className='megamenu__sublink' href="#">{item.subMenuChildName}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MegaMenu