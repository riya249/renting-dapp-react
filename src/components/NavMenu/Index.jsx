import React, { Component } from 'react';
import './NavMenu.scss';
import { Link } from 'react-router-dom';
import { categoryArray,subCategoryArray } from '../../env';
import { withRouter } from 'react-router-dom';


class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render(){
        console.log('categoryArray',this.state.categoryArray);
        
        return (
            <div className='dropdown-category'>
            <div className='allcategory-section'>
           <div>
             <Link to ='/allCategory'>  <p className='main-category'>Real Estate</p> </Link>
            <p className='categ-linHt'>For Sale:Houses & Appartments</p>
            <p className='categ-linHt'>For Rent:Houses & Appartments</p>
            <p className='categ-linHt'>Lands & Plots</p>
            <p className='categ-linHt'>Shops & Offices</p>
            <p className='categ-linHt'>PG & Guest Houses</p>
           </div>
           <div>
               <p className='main-category'>Vehicles</p>
                <p className='categ-linHt'>Cars</p>
                <p className='categ-linHt'>Commercial Vehicles</p>
                <p className='categ-linHt'>Spare parts</p>
                <p className='categ-linHt'>Other Vehicles</p>
           </div>
           </div>
           <div className='allcategory-section'>
           <div>
           <Link to ='/allCategory'>  <p className='main-category'>Electronics & Appliances</p> </Link>
               <p className='categ-linHt'>TV-Video-Audio</p>
               <p className='categ-linHt'>Kitchen & Other Appliances</p>
               <p className='categ-linHt'>Computers & Laptops</p>
                <p className='categ-linHt'>Cameras & Lenses</p>
                <p className='categ-linHt'>Games & Entertainment</p>
                <p className='categ-linHt'>Fridges</p>
                <p className='categ-linHt'>Computer Accessories</p>
                <p className='categ-linHt'>Hard Disks,Printers & Monitors</p>
                <p className='categ-linHt'>Acs</p>
                <p className='categ-linHt'>Hard Disks,Printers & Monitors</p>
           </div>
           <div>
           <Link to ='/allCategory'>      <p className='main-category'>Mobiles</p> </Link>
                <p className='categ-linHt'>Mobile Phones</p>
                <p className='categ-linHt'>Accessories</p>
                <p className='categ-linHt'>Tablets</p>
           </div>
           </div>
           <div className='allcategory-section'>
           <div>
           <Link to ='/allCategory'>    <p className='main-category'>Furniture</p>  </Link> 
                <p className='categ-linHt'>Sofa & Dining</p>
                <p className='categ-linHt'>Beds & Wardrobe</p>
                <p className='categ-linHt'>Home Decor & Garden</p>
                <p className='categ-linHt'>Kids Furniture</p>
                <p className='categ-linHt'>Other Household items</p>
           </div>
           <div>
           <Link to ='/allCategory'>     <p className='main-category'>Bikes</p> </Link>
                <p className='categ-linHt'>Motorcycles</p>
                <p className='categ-linHt'>Scooter</p>
                <p className='categ-linHt'>Spare  Parts</p>
                <p className='categ-linHt'>Bicycles</p>
           </div>
           </div>
            </div>
        );
    }
}


export default NavMenu;

// const NavMenu = props => {
//     const listOfCategories = [];
//     const listOfSubCategories = [];

//     for(const categoryId in categoryArray) {
//       const listOfSubCategories = [];
  
//       for(const subCategoryId in subCategoryArray[categoryId]) {
//         const url = `/List/${categoryArray[categoryId].toLowerCase().split(' ').join('-')}/${subCategoryArray[categoryId][subCategoryId].toLowerCase().split(' ').join('-')}`;
  
//         listOfSubCategories.push(
//           <li key={url} onClick={() => props.history.push(url)}>{subCategoryArray[categoryId][subCategoryId]}</li>
//         );
//       }
//       console.log('listOfSubCategories', listOfSubCategories);
//       listOfCategories.push(
//         <>
//         <li>
//           <a
//             onClick={() => props.history.push(`/List/${categoryArray[categoryId].toLowerCase().split(' ').join('-')}`)}
//             className={props.match.params.category === categoryArray[categoryId].toLowerCase()
//               ? 'menu-lef-act' : null}>
//             {categoryArray[categoryId]}
//           </a>
//         </li>
  
//         </>
//       );
//     }
//     console.log('listOfCategories', listOfCategories);
//     console.log('subcategories', listOfSubCategories);

//     return (
//       <>
//             <div className='dropdown-category'>
//             <div className='allcategory-section'>
//             <div>
//             {listOfCategories.map((mainCategory, i)=>{
//              return <Link to ='/allCategory'><p className='main-category'>{mainCategory}</p></Link>
//              {listOfSubCategories[i].map((name,j)=>{
//             return <p className='categ-linHt'>{name}</p>
//               })}
//             })}
//           </div>
//             </div>
//             </div>
         
//       </>
//     );
//   }
  
//   export default withRouter(NavMenu);