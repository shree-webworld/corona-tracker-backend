const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var validator = require('validator');

const patientSchema = new mongoose.Schema({
                                              _id:Number,
                                              name:
                                              {
                                                type: String,
                                                uppercase: true,
                                                required:true,
                                                trim:true,
                                                minLength:2,
                                                maxLength:30
                                              },
                                              email:
                                              {
                                                type:String,
                                                required:true,
                                                unique:true,
                                                trim:true,
                                                lowercase:true,
                                                validate(value)
                                                {
                                                  if(!validator.isEmail(value))
                                                  {
                                                    throw new Error("Email is invalid");
                                                  }
                                                }
                                              },
                                              phone:
                                              {
                                                type:Number,
                                                required:true,
                                                unique:true,
                                                trim:true
                                              /*  validate(value)
                                                {
                                                  if(!validator.isMobilePhone(value, 'zh-CN'))
                                                  {
                                                    throw new Error("Phone no. is invalid");
                                                  }
                                                }*/
                                              },
                                              symptoms:
                                              {
                                                type:String,
                                                required:true,
                                                trim:true
                                              },
                                              message:
                                              {
                                                type:String,
                                                uppercase: true,
                                                required:true,
                                                trim:true
                                              },
                                              date:
                                              {
                                                type:Date,
                                                default:Date.now
                                              }
                                          });

patientSchema.plugin(AutoIncrement,{start_seq:'101'});
//collection(table) creation. model name should always be capital.
const Patient_registered = mongoose.model('Patient_registered', patientSchema);


module.exports = Patient_registered;
