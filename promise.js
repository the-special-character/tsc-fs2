const ls = () => {
    return new Promise((resolve, reject) => { 
      setTimeout(() => { 
        reject("ls reject")
       }, 2000)
     })
  }
  
  const ms = () => {
    return new Promise((resolve, reject) => { 
      setTimeout(() => { 
        reject("ms resolved")
       }, 3000)
     })
  }
  
  const rs = () => {
    return new Promise((resolve, reject) => { 
      setTimeout(() => { 
        reject("rs reject")
       }, 1000)
     })
  }
  
  const loadData = async () => {
    try {
      console.time("promise")
      const res = await Promise.any([
        ls(),
        ms(),
        rs()
      ])
      console.log(res);
    //   const lsRes = await ls();
    //   console.log(lsRes);
    //   const msRes = await ms();
    //   console.log(msRes);
    //   const rsRes = await rs();
    //   console.log(rsRes);
      console.timeEnd("promise")
    } catch (error) {
      console.log(error);
    }
  };
  
  loadData();
  