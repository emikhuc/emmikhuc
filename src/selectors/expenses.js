export default (expenses, {text, sortBy, startDate, endDate}) => {
  
    return expenses.filter((expense)=>{
    // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
    const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;
    return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
      if(sortBy === 'amount'){
          // if(a.amount < b.amount){
          //   return 1
          // }else if (a.amount > b.amount){
          //   return -1
          // }else {
          //   return 0
          // }
          return a.amount < b.amount ? 1 : -1;
      }else if(sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1;
      }
    });
  
}
