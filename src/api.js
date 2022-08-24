const baseUrl = "https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa";

export const getRole = async () => {
    let response = await fetch(`${baseUrl}/v1/education?role=softwaredeveloper`);
    // Logs the response
    if(response.ok){
      //console.log(response.json()); //first consume it in console.log
     return response.json(); //then consume it again, the error happens
  }
}


//onst res = await fetch(`${baseUrl}/jobprofile/software`);
export const register = async (body) => {
  const res = await fetch(`${baseUrl}/v1/register`, {
    method: "POST",
    body: JSON.stringify({...body}),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    // mode: "no-cors",
  });
  return res;
};
