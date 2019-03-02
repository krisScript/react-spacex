import React from 'react'
import RocketDetaiil from './RocketDetail'

const filterEntriesByType = obj => {
    return Object.entries(obj).filter(entry => {
        return (
          typeof entry[1] === 'string' ||
          (typeof entry[1] === 'number' && entry[0] !== 'id')
        );
      });
}
const finalizeDetailsArr  = arr => {
   return arr.map(detail => {
        const detailName = detail[0];
        const detailValue = detail[1];
        const finalDetailName = detailName.split('_').join(' ');
        let finalDetailValue;
        if (detailName === 'first_flight') {
          finalDetailValue = new Date(
            Date.parse(detailValue)
          ).toDateString();
        } else {
          finalDetailValue = detailValue;
        }
        return (
          <RocketDetaiil
            key={finalDetailName}
            detailName={finalDetailName}
            detailValue={finalDetailValue}
          />
        );
      });
}

const getDetailComponents = (obj) => {
    const filteredArr = filterEntriesByType(obj)
    const detailComponentsArr = finalizeDetailsArr(filteredArr)
    return detailComponentsArr
}
 export default getDetailComponents