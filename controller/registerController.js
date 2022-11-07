const Patient_registered = require('../model/patientSchema');

const postRegister = async(req, res)=>{
                                                console.log(req.body);
                                                const {name, email, phone, symptoms, message} = req.body; //object destructering


                                                if(!name || !email || !phone || !symptoms || !message)
                                                {
                                                    return res.status(422).json({error:"Please fill all the fields properly"});
                                                }
                                                try
                                                {
                                                    const emailExist = await Patient_registered.findOne({email : email});
                                                    if(emailExist)
                                                    {
                                                         return res.status(422).json({error:"Email already exists"});
                                                         //res.status(422).send({message:"Email already exists"});
                                                    }
                                                    const phoneExist = await Patient_registered.findOne({phone : phone});
                                                    if(phoneExist)
                                                    {
                                                        return res.status(422).json({error:"Phone no. already exists"});
                                                         //res.status(422).send({message:"Phone no. already exists"});
                                                    }
                                                   const details = new Patient_registered({name, email, phone, symptoms, message});
                                                   await details.save();

                                                   res.status(201).json({message:"Patient registered successfully"});
                                                   // res.status(201).send({message:"Patient registered and mailed successfully"});
                                                  // res.json({message: req.body}); //to get data in postman console.
                                                  } catch (e)
                                                    {
                                                      console.log(e);
                                                      // res.status(500).json({error: "Failed to registered"});
                                                      res.status(500).send({message: "Failed to registered"});
                                                    }
                                             }




const getRegisterDetails = async (req, res) =>{
                                        try
                                        {
                                            const details = await Patient_registered.find();
                                            return res.status(200).json(details);
                                        }catch(e)
                                          {
                                              console.error(e);
                                              return res.status(200).json({error : "Failed to fetch data"});
                                          }
                                    }

                                    const registerController = async (req, res) =>{
                                                                                  switch (req.method)
                                                                                  {
                                                                                    case "GET":
                                                                                               await getRegisterDetails(req,res);
                                                                                                break;
                                                                                    case "POST":
                                                                                                await postRegister(req,res);
                                                                                                break;
                                                                                  }
                                                                        }





module.exports = registerController;
