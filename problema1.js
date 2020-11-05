const  angryProfessor = (k, a) => {
    
    let onTimeCount = 0;
    
    a.map( t =>  {
      
      (t<=0) ? onTimeCount+=1 : onTimeCount
    
    });
    
    return (onTimeCount >= k) ? 'NO' : 'YES';
    
  };
  
  const option1 = angryProfessor(3, [-1,-3,4,2]);
  const option2 = angryProfessor(2, [0,-1,2,1]);
  
  console.log(option1);
  console.log(option2);
  
  // const angryProfessor = (k, a) => (a.filter((num) => num <= 0).lenght >= k) ? "YES": "NO"; 

  // 