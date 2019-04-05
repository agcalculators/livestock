!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@agc-calculators/calculators-core")):"function"==typeof define&&define.amd?define(["exports","@agc-calculators/calculators-core"],t):t((e=e||self).agcLivestockCalculators={},e.agcCalculatorsCore)}(this,function(e,t){"use strict";const a=e=>{if(!e||t.isEmpty(e))return e;let a=Object.keys(e).reduce((a,r)=>(t.isEmpty(e[r])||(a[r]=e[r]),a),{});return Object.assign({},a,{count:e.count})},r=e=>!e||t.isEmpty(e)?0:Object.keys(e).reduce((a,r)=>(t.isEmpty(e[r])||a++,a),0);function i({breedingDate:e,gestation:i=283}){console.log("breeding date",e);let n={breedingDate:t.validate(e,["required","date"]),gestation:t.validate(i,["required","number","min"],{min:1})};if(n.count=r(n),n.count>0)return{errors:a(n)};let u=parseInt(Math.floor(i/3)),s=[0,u,2*u];return{breedingDate:e,gestation:i,birthingDate:t.addDays(e,i),firstPartition:t.addDays(e,s[0]),secondPartition:t.addDays(e,s[1]),thirdPartition:t.addDays(e,s[2]),daysTillBirthing:t.daysBetween(t.addDays(e,i),new Date),daysBred:t.daysBetween(new Date,e),calculated:new Date,errors:{count:0}}}function n({birthingDate:e,gestation:i=283}){let n={birthingDate:t.validate(e,["required","date"]),gestation:t.validate(i,["required","number","min"],{min:1})};if(n.count=r(n),n.count>0)return{errors:a(n)};let u=parseInt(Math.floor(i/3)),s=[0,u,2*u];const d=t.addDays(e,-parseInt(i));return{birthingDate:e,gestation:i,breedingDate:d,firstPartition:t.addDays(e,s[0]),secondPartition:t.addDays(e,s[1]),thirdPartition:t.addDays(e,s[2]),daysTillBreeding:t.daysBetween(d,new Date),calculated:new Date,errors:{count:0}}}function u({startDate:e,startWeight:i,endWeight:n,averageDailyGain:u}){let s={startDate:t.validate(e,["required","date"]),startWeight:t.validate(i,["required","number","min"],{min:1}),endWeight:t.validate(n,["required","number","min","gt"],{min:1,gt:"startWeight"},{startWeight:i}),averageDailyGain:t.validate(u,["required","number","min"],{min:0})};if(s.count=r(s),s.count>0)return{errors:a(s)};const d=parseFloat(n)-parseFloat(i),m=parseInt(Math.floor(d/parseFloat(u)));return{startDate:t.parseDate(e),startWeight:t.formatNumber(i,0),endWeight:t.formatNumber(n,0),averageDailyGain:t.formatNumber(u,2),weightGain:t.formatNumber(d,0),daysOnFeed:m,endDate:t.addDays(e,m),calculated:new Date,errors:{count:0}}}function s({headCount:e,totalFeedIntake:i,feedConversionRate:n,startWeight:u}){let s={headCount:t.validate(e,["required","min"],{min:1}),totalFeedIntake:t.validate(i,["required","number","min"],{min:1}),feedConversionRate:t.validate(n,["required","number","min"],{min:1}),startWeight:t.validate(u,["required","min"],{min:1})};if(s.count=r(s),s.count>0)return{errors:a(s)};let d=t.formatNumber(parseFloat(i)/parseInt(e)/parseFloat(n),0),m=t.formatNumber(parseFloat(u)+d,0),l=t.formatNumber(d*parseInt(e),0);return{headCount:t.formatNumber(u,0),totalFeedIntake:t.formatNumber(m,0),feedConversionRate:t.formatNumber(n,1),startWeight:t.formatNumber(u,0),weightGainPerHead:d,endWeight:m,totalWeightGain:l,calculated:new Date,errors:{count:0}}}function d({startWeight:e,endWeight:a,daysOnFeed:r}){let i={startWeight:t.validate(e,["required","number","min"],{min:1}),endWeight:t.validate(e,["required","number","gt"],{gt:"startWeight"},{startWeight:e}),daysOnFeed:t.validate(r,["required","number","min"],{min:1})};if(i.count=Object.keys(i).reduce((e,a)=>(t.isEmpty(i[a])||e++,e),0),i.count>0)return{errors:i};const n=parseFloat(a)-parseFloat(e),u=n/parseInt(r);return{startWeight:t.formatNumber(e,0),endWeight:t.formatNumber(a,0),daysOnFeed:t.formatNumber(r,0),averageDailyGain:t.formatNumber(u,2),weightGain:t.formatNumber(n,0),calculated:new Date,errors:{count:0}}}function m({birthWeight:e,ageOfDam:i}){let n={birthWeight:t.validate(e,["required","number","min"],{min:1}),ageOfDam:t.validate(i,["required","oneOf"],{oneOf:["2","3","4","5","11"]})};if(n.count=r(n),n.count>0)return{errors:a(n)};let u={2:8,3:5,4:2,5:0,11:3}[`${i}`];return{birthWeight:t.formatNumber(e,0),ageOfDam:i,adjustment:t.formatNumber(u,0),adjustedBirthWeight:t.formatNumber(parseFloat(e)+parseFloat(u),0),calculated:new Date,errors:{count:0}}}function l({gender:e,birthWeight:i,currentWeight:n,currentAge:u,ageOfDam:s}){let d={gender:t.validate(e,["required","oneOf"],{oneOf:["male","female"]}),birthWeight:t.validate(i,["required","number","min"],{min:1}),currentWeight:t.validate(n,["required","number","min","gt"],{min:1,gt:"birthWeight"},{birthWeight:i}),currentAge:t.validate(u,["required","number","min","max"],{min:150,max:300}),ageOfDam:t.validate(s,["required","oneOf"],{oneOf:["2","3","4","5","11"]})};if(d.count=r(d),d.count>0)return{errors:a(d)};let m=parseFloat({2:{male:60,female:54},3:{male:40,female:36},4:{male:20,female:18},5:{male:0,female:0},11:{male:20,female:18}}[`${s}`][e]),l=parseFloat(n)-parseFloat(i),o=parseFloat(l/parseInt(u)),b=parseFloat(i)+m+205*o;return{gender:e,birthWeight:t.formatNumber(i,0),currentWeight:t.formatNumber(n,0),currentAge:t.formatNumber(u,0),ageOfDam:s,adjustment:t.formatNumber(m,0),adjustedWeaningWeight:t.formatNumber(b,0),averageDailyGain:t.formatNumber(o,2),calculated:new Date,errors:{count:0}}}function o({currentWeight:e,currentAge:i,adjustedWeaningWeight:n}){let u={currentWeight:t.validate(e,["required","number","min"],{min:1}),currentAge:t.validate(i,["required","number","min","max"],{min:250,max:450}),adjustedWeaningWeight:t.validate(n,["required","number"])};if(u.count=r(u),u.count>0)return{errors:a(u)};let s=(parseFloat(e)-parseFloat(n))/(parseFloat(i)-205),d=160*parseFloat(s)+parseFloat(n);return{currentWeight:t.formatNumber(e,0),currentAge:t.formatNumber(i,0),adjustedWeaningWeight:t.formatNumber(n,0),averageDailyGain:t.formatNumber(s,2),adjustedYearlingWeight:t.formatNumber(d,0),calculated:new Date,errors:{count:0}}}function b({femalesExposed:e,numberBorn:i,numberLost:n}){let u={femalesExposed:t.validate(e,["required","number","min"],{min:1}),numberBorn:t.validate(i,["required","number","min"],{min:0}),numberLost:t.validate(n,["required","nunmber","min"],{min:0})};if(u.count=r(u),u.count>0)return{errors:a(u)};let s=t.formatNumber(n,0)/t.formatNumber(i,0),d=t.formatNumber(n,0)/t.formatNumber(e,0);return{femalesExposed:t.formatNumber(e,0),numberBorn:t.formatNumber(i,0),numberLost:t.formatNumber(n,0),deathLossBorn:t.formatNumber(100*s,1),deathLossExposed:t.formatNumber(100*d,1),calculated:new Date,errors:{count:0}}}function g({breedingSeasonLength:e,sireTurnOutDate:i,gestation:n=283}){let u={breedingSeasonLength:t.validate(e,["required","number","min"],{min:1}),sireTurnOutDate:t.validate(i,["required","date"]),gestation:t.validate(n,["required","number","min"],{min:1})};if(u.count=r(u),u.count>0)return{errors:a(u)};let s=t.addDays(t.parseDate(i),parseInt(n)),d=t.addDays(s,parseInt(e));return{breedingSeasonLength:t.formatNumber(e,0),sireTurnOutDate:t.parseDate(i),gestation:t.formatNumber(n),birthingSeasonStart:s,birthingSeasonEnd:d,calculated:new Date,errors:{count:0}}}function h({totalWeightWeaned:e,femalesExposed:i}){let n={totalWeightWeaned:t.validate(e,["required","number","min"],{min:1}),femalesExposed:t.validate(i,["required","number","min"],{min:1})};if(n.count=r(n),n.count>0)return{errors:a(n)};let u=parseFloat(e)/parseFloat(i);return{totalWeightWeaned:t.formatNumber(e,0),femalesExposed:t.formatNumber(i,0),weightWeanedPerFemale:t.formatNumber(u,0),calculated:new Date,errors:{count:0}}}function c({numberBorn:e,numberFemalesExposed:i,numberFemalesSoldOrDied:n,numberFemalesPurchased:u}){let s={numberBorn:t.validate(e,["required","number","min"],{min:0}),numberFemalesExposed:t.validate(i,["required","number","min"],{min:0}),numberFemalesSoldOrDied:t.validate(n,["required","number","min"],{min:0}),numberFemalesPurchased:t.validate(u,["required","number","min"],{min:0})};if(s.count=r(s),s.count>0)return{errors:a(s)};let d=parseInt(i)-parseInt(n)+parseInt(u),m=0==d?0:parseFloat(e)/parseInt(d)*100;return{numberBorn:t.formatNumber(e,0),numberFemalesExposed:t.formatNumber(i,0),numberFemalesSoldOrDied:t.formatNumber(n,0),numberFemalesPurchased:t.formatNumber(u,0),numberFemalesExposed:t.formatNumber(i,0),birthingPercentage:t.formatNumber(m,1),calculated:new Date,errors:{count:0}}}function p({numberWeaned:e,numberFemalesExposed:i,numberFemalesSoldOrDied:n,numberFemalesPurchased:u}){let s={numberWeaned:t.validate(e,["required","number","min"],{min:0}),numberFemalesExposed:t.validate(i,["required","number","min"],{min:0}),numberFemalesSoldOrDied:t.validate(n,["required","number","min"],{min:0}),numberFemalesPurchased:t.validate(u,["required","number","min"],{min:0})};if(s.count=r(s),s.count>0)return{errors:a(s)};let d=parseInt(i)-parseInt(n)+parseInt(u),m=0===parseInt(d)?0:parseFloat(e)/parseInt(d)*100;return{numberWeaned:t.formatNumber(e,0),numberFemalesExposed:t.formatNumber(i,0),numberFemalesSoldOrDied:t.formatNumber(n,0),numberFemalesPurchased:t.formatNumber(u,0),numberFemalesExposed:t.formatNumber(i,0),weaningPercentage:t.formatNumber(m,1),calculated:new Date,errors:{count:0}}}const f={2:.85,3:.9,4:.95,5:.95,6:.95,7:.95,8:.95,9:.9,10:.9,11:.9};function y({herdSize:e,replacementRate:i}){let n={herdSize:t.validate(e,["required","number","min"],{min:1}),replacementRate:t.validate(i,["required","number","min"],{min:0})};if(n.count=r(n),n.count>0)return{errors:a(n)};let u=0,s=0,d=parseFloat(i)/100;for(var m in f)if(f.hasOwnProperty(m)){var l=parseFloat(f[m]);if(0===u)u=(s=l*d)*parseInt(m);else u+=(s=s*l)*parseInt(m)}let o=Math.ceil(d*e);return{herdSize:t.formatNumber(e,0),replacementRate:t.formatNumber(i,0),averageCowAge:t.formatNumber(u,0),replacementsNeeded:t.formatNumber(o,0),calculated:new Date,errors:{count:0}}}function D({startWeight:e,endWeight:i,daysOnFeed:n,totalFeedCost:u}){let s={daysOnFeed:t.validate(n,["required","number","min"],{min:1}),totalFeedCost:t.validate(u,["required","number","min"],{min:0}),startWeight:t.validate(e,["required","number","min"],{min:1}),endWeight:t.validate(i,["required","number","gt"],{gt:"startWeight"},{startWeight:e})};if(s.count=r(s),s.count>0)return{errors:a(s)};let d=parseInt(i)-parseInt(e),m=t.formatNumber(d/parseInt(n),2),l=parseFloat(u)/parseFloat(d),o=parseFloat(m)*parseFloat(l);return{daysOnFeed:t.formatNumber(n,0),totalFeedCost:t.formatNumber(u,2),startWeight:t.formatNumber(e,0),endWeight:t.formatNumber(i,0),totalWeightGain:t.formatNumber(d,0),averageDailyGain:t.formatNumber(m,2),feedCostPerWeight:t.formatNumber(l,2),feedCostPerDay:t.formatNumber(o,2),calculated:new Date,errors:{count:0}}}var W={calculateBirthingDate:i,calculateBreedingDate:n,calculateDaysOnFeed:u,calculateWeightGain:s,calculateAverageDailyGain:d,calculateAdjustedBirthWeight:m,calculateAdjustedWeaningWeight:l,calculateAdjustedYearlingWeight:o,calculateDeathLoss:b,calculateBirthingSeason:g,calculateWeightWeaned:h,calculateBirthingPercentage:c,calculateWeaningPercentage:p,calculateCattleReplacementsNeeded:y,calculateFeedCost:D};const q=[{text:"Male",value:"male"},{text:"Female",value:"female"}],v=q.reduce((e,t)=>(e[t.value]=t.text,e),{}),w=[{text:"2 Years Old",value:"2"},{text:"3 Years Old",value:"3"},{text:"4 Years Old",value:"4"},{text:"5 - 10 Years Old",value:"5"},{text:"11 Years and Older",value:"11"}],F=w.reduce((e,t)=>(e[t.value]=t.text,e),{}),N=[{text:"Chicken - 21 Days",value:21},{text:"Cow - 283 Days",value:283},{text:"Ewe - 147 Days",value:147},{text:"Goat - 150 Days",value:150},{text:"Heifer - 279 Days",value:279},{text:"Mare - 342 Days",value:342},{text:"Sow - 114 Days",value:114}],j=N.reduce((e,t)=>(e[t.value]=t.text,e),{});var C={birthingDateForm:{id:"birthing-date",name:"Birthing Date",category:"livestock",description:"Calculates a birthing date from a given breeding date.",inputs:{breedingDate:{type:"date",label:"Breeding Date",validators:["required","date"],default:()=>new Date},gestation:{type:"select",label:"Gestation",validators:["required","number","min"],params:{min:1},options:N,default:283}},outputs:{birthingDate:{type:"date",label:"Birthing Date"},firstPartition:{type:"date",label:"First Partition"},secondPartition:{type:"date",label:"Second Partition"},thirdPartition:{type:"date",label:"Third Partition"},daysTillBirthing:{type:"number",label:"Days until Birthing"},daysBred:{type:"number",label:"Days Bred"},calculated:{type:"date",label:"Calculated Date"}},calculator:i,messages:{breedingDate:{required:"Breeding date is required",date:"Breeding date must be a valid date"},gestation:{required:"Gestation is required",number:"Gestation must be a number",min:"Gestation must be greater than zero."}},formatters:{gestation:e=>j[e]},calendar:{birthingDate:({birthingDate:e})=>({subject:"Birthing Date",from:e}),firstPartition:({firstPartition:e})=>({subject:"Birthing First Partition",from:e}),secondPartition:({secondPartition:e})=>({subject:"Birthing Second Partition",from:e}),thirdPartition:({thirdPartition:e})=>({subject:"Birthing Third Partition",from:e})},dashboard:{birthingDate:{id:"birthing-date",title:"Birthing Date",calculator:"birthing-date",widget:"date",params:{date:"birthingDate"}},firstPartition:{id:"first-partition",title:"First Partition",calculator:"birthing-date",widget:"date",params:{date:"firstPartition"}},secondPartition:{id:"second-partition",title:"Second Partition",calculator:"birthing-date",widget:"date",params:{date:"secondPartition"}},thirdPartition:{id:"third-partition",title:"Third Partition",calculator:"birthing-date",widget:"date",params:{date:"thirdPartition"}},daysTillBirthing:{id:"days-till-birthing",title:"Days Until Birthing",calculator:"birthing-date",widget:"countdown",params:{from:"birthingDate"}},daysBred:{id:"days-bred",title:"Days Bred",calculator:"birthing-date",widget:"countup",params:{from:"birthingDate"}}}},breedingDateForm:{id:"breeding-date",name:"Breeding Date",description:"Calculates a breeding date from a given birthing date.",category:"livestock",inputs:{birthingDate:{type:"date",label:"Birthing Date",validators:["required","date"],default:()=>new Date},gestation:{type:"select",label:"Gestation",validators:["required"],default:283,options:[{text:"Chicken - 21 Days",value:21},{text:"Cow - 283 Days",value:283},{text:"Ewe - 147 Days",value:147},{text:"Goat - 150 Days",value:150},{text:"Heifer - 279 Days",value:279},{text:"Mare - 342 Days",value:342},{text:"Sow - 114 Days",value:114}]}},outputs:{breedingDate:{type:"date",label:"Breeding Date"},firstPartition:{type:"date",label:"First Partition"},secondPartition:{type:"date",label:"Second Partition"},thirdPartition:{type:"date",label:"Third Partition"},daysTillBreeding:{type:"number",label:"Days until Breeding"},calculated:{type:"date",label:"Calculated Date"}},calculator:n,messages:{birthingDate:{required:"Birthing date is required",date:"Birthing date must be a valid date"},gestation:{required:"Gestation is required.",min:"Gestation must be greater than zero."}},calendar:{breedingDate:({breedingDate:e})=>({subject:"Breeding Date",from:e})}},daysOnFeedForm:{id:"days-on-feed",name:"Days on Feed",description:"Calculates the average number of days on feed based on average daily gain.",inputs:{startDate:{type:"date",label:"Start Date",validators:["required","date"],default:()=>new Date},startWeight:{type:"number",label:"Starting Weight",units:"lbs",validators:["required","min"],params:{min:1}},endWeight:{type:"number",label:"Ending Weight",units:"lbs",validators:["required","min","gt"],params:{min:1,gt:"startWeight"}},averageDailyGain:{type:"number",label:"Average Daily Gain",units:"lbs/day",validators:["required","min"],params:{min:0},precision:2}},outputs:{weightGain:{type:"number",label:"Weight Gain",units:"lbs"},daysOnFeed:{type:"number",label:"Days on Feed"},endDate:{type:"date",label:"End Date"},calculated:{type:"date",label:"Calculated Date"}},calculator:u,messages:{startDate:{required:"Start date is required.",date:"Start date must be a valid date."},startWeight:{required:"Starting weight is required.",number:"Starting weight must be a number.",min:"Starting weight must be greater than zero."},endWeight:{required:"Ending weight is required.",number:"Ending weight must be a number.",gt:"Ending weight must be greater than starting weight."},averageDailyGain:{required:"Average daily gain is required.",number:"Average daily gain must be a number.",min:"Average daily gain must be greater than zero."}},calendar:{daysOnFeed:({startDate:e,endDate:t})=>({subject:"Days on Feed",from:e,to:t})}},adjustedBirthWeightForm:{id:"adj-birth-weight",name:"Adjusted Birth Weight",description:"Calculates an adjusted birth weight based on the age of the dam.",inputs:{birthWeight:{type:"number",label:"Birth Weight",units:"lbs",validators:["required","number","min"],params:{min:1}},ageOfDam:{type:"select",label:"Dam",validators:["required","oneOf"],params:{oneOf:["2","3","4","5","11"]},default:"3",options:w}},outputs:{adjustedBirthWeight:{type:"number",label:"Adjusted Birth Weight",units:"lbs"},adjustment:{type:"number",label:"Adjustment",units:"lbs"},calculated:{type:"date",label:"Calculated Date"}},calculator:m,messages:{birthWeight:{required:"Birth weight is required.",number:"Birth weight must be a number.",min:"Birth weight must be greater than zero."},ageOfDam:{required:"Dam age is required.",oneOf:"Valid dam age options are 2, 3, 4, 5 (5 -10), or 11 (11+)."}},formatters:{ageOfDam:e=>F[e]||e},calendar:{adjustedBirthWeight:({calculated:e,adjustment:t,adjustedBirthWeight:a,units:r="lbs"})=>({subject:"Adjusted Birth Weight",details:`${a} ${r} ${t>0?`(+${t} ${r})`:""}`,from:e})},dashboard:{adjustedBirthWeight:{id:"adjusted-birth-weight",calculator:"adj-birth-weight",widget:"measure",params:{title:"Adjusted Birth Weight",measure:({adjustedBirthWeight:e,units:t="lbs"})=>`${e} ${t}`,units:"lbs",source:"calculator",details:({adjustment:e,ageOfDam:t,formatters:a,units:r="lbs"})=>`Adjusted ${e} ${r} (${a.ageOfDam(t)})`}},adjustment:{id:"adjusted-birth-weight-adjustement",calculator:"adj-birth-weight",widget:"measure",params:{title:"Adjusted Birth Weight Adjustment",measure:({adjustment:e,units:t="lbs"})=>`${e} ${t}`,units:"lbs",source:"calculator",details:({ageOfDam:e,formatters:t})=>`Based on a ${t.ageOfDam(e).replace("Years","Year")} dam.`}}}},averageDailyGainForm:{id:"average-daily-gain",name:"Average Daily Gain",description:"Calculates an average daily gain.",inputs:{startWeight:{type:"number",label:"Starting Weight",units:"lbs",validators:["required","number","min"],params:{min:1}},endWeight:{type:"number",label:"Ending Weight",units:"lbs",validators:["required","min","gt"],params:{min:1,gt:"startWeight"}},daysOnFeed:{type:"number",label:"Days on Feed",validators:["required","min"],params:{min:1}}},outputs:{weightGain:{type:"number",label:"Weight Gain",units:"lbs"},averageDailyGain:{type:"number",label:"Average Daily Gain",units:"lbs/day"},calculated:{type:"date",label:"Calculated Date"}},calculator:d,messages:{startWeight:{required:"Starting weight is required",number:"Starting weight must be a number.",min:"Starting weight must be greater than zero."},endWeight:{required:"Ending weight is required",number:"Ending weight must be a number.",gt:"End weight must be greater than the starting weight."},daysOnFeed:{required:"Days on feed is required",number:"Days on feed must be a number",min:"Days on feed must be greater than zero."}}},adjustedWeaningWeightForm:{id:"adj-weaning-weight",name:"Adjusted 205 Day Weaning Weight",category:"livestock",description:"Calculates an adjusted weaning weight at 205 days based on gender, dam age, current age and weight.",inputs:{gender:{type:"select",label:"Gender",validators:["required","oneOf"],params:{oneOf:["male","female"]},default:"male",options:q},birthWeight:{type:"number",label:"Birth Weight",units:"lbs",validators:["required","number","min"],params:{min:1}},currentWeight:{type:"number",label:"Current Weight",units:"lbs",validators:["required","number","gt"],params:{gt:"birthWeight"}},currentAge:{type:"number",label:"Current Age",validators:["required","number","min","max"],params:{min:150,max:300}},ageOfDam:{type:"select",label:"Age of Dam",validators:["required","oneOf"],params:{oneOf:["2","3","4","5","11"]},default:"3",options:w}},outputs:{adjustment:{type:"number",label:"Adjustment",units:"lbs"},averageDailyGain:{type:"number",label:"Average Daily Gain",units:"lbs/day"},adjustedWeaningWeight:{type:"number",label:"Adjusted 205 Day Weaning Weight",units:"lbs"},calculated:{type:"date",label:"Calculated Date"}},calculator:l,messages:{gender:{required:"Please provide a gender",oneOf:"Gender must be male or female"},birthWeight:{required:"Birth weight is required.",number:"Birth weight must be a number",min:"Birth weight must be greater than zero."},currentWeight:{required:"Current weight is required.",number:"Current weight must be a number",min:"Current weight must be greater than the birth weight."},currentAge:{required:"Current age is required",number:"Current age must be a number",min:"Current age should be between 150 and 300",max:"Current age should be bewtween 150 and 300"},ageOfDam:{required:"Please provide the age of the dam.",oneOf:"Age of dam should be 2, 3, 4, 5 or 11."}},formatters:{gender:e=>v[e]||e,ageOfDam:e=>F[e]||e},calendar:{adjustedWeaningWeight:({calculated:e,adjustment:t,adjustedWeaningWeight:a,units:r="lbs"})=>({subject:"Adjusted 205 Day Weaning Weight",details:`${a} ${r} ${t>0?`(+${t} ${r})`:""}`,from:e})},dashboard:{adjustedWeaningWeight:{id:"adjusted-weaning-weight",calculator:"adj-weaning-weight",widget:"measure",params:{title:"Adjusted 205 Day Weaning Weight",measure:({adjustedWeaningWeight:e,units:t="lbs"})=>`${e} ${t}`,units:"lbs",source:"calculator",details:({adjustment:e,ageOfDam:t,formatters:a,units:r="lbs"})=>`Adjusted ${e} ${r} (${a.ageOfDam(t)})`}}}},adjustedYearlingWeightForm:{id:"adj-yearling-weight",name:"Adjusted 365 Day Yearling Weight",category:"livestock",description:"Calculates an adjusted yearling weight at 365 days based on current age, weight and an adjusted weaning weight.",inputs:{currentWeight:{type:"number",label:"Current Weight",units:"lbs",validators:["required","number","gt"],params:{gt:"birthWeight"}},currentAge:{type:"number",label:"Current Age",units:"days",validators:["required","number","min","max"],params:{min:250,max:450}},adjustedWeaningWeight:{type:"number",label:"Adjusted Weaning Weight",units:"lbs",validators:["required","number","min"],params:{min:1}}},outputs:{averageDailyGain:{type:"number",label:"Average Daily Gain",units:"lbs"},adjustedYearlingWeight:{type:"number",label:"Adjusted Yearling Weight",units:"lbs"},calculated:{type:"date",label:"Calculated Date"}},calculator:o,messages:{currentWeight:{required:"Current weight is required.",number:"Current weight must be a number."},currentAge:{required:"Current age is required.",number:"Current age must be a number",min:"Current age should be between 250 and 450.",max:"Current age should be bewtween 250 and 450."},adjustedWeaningWeight:{required:"Adjusted weaning weight is required.",number:"Adjusted weaning weight must be a number.",min:"Adjusted weaning weight should be greater than zero."}},formatters:{date:e=>t.formatDate(e)||e},calendar:{adjustedYearlingWeight:({calculated:e,adjustedYearlingWeight:t,units:a="lbs"})=>({subject:"Adjusted 365 Day Yearling Weight",details:`${t} ${a} ${adjustment>0?`(+${adjustment} ${a})`:""}`,from:e})},dashboard:{adjustedYearlingWeight:{id:"adjusted-yearling-weight",calculator:"adj-yearling-weight",widget:"measure",params:{title:"Adjusted 365 Day Yearling Weight",measure:({adjustedYearlingWeight:e,units:t="lbs"})=>`${e} ${t}`,units:"lbs",source:"calculator",details:({calculated:e,formatters:t})=>`Measurement taken on ${t.date(e)}`}}}},deathLossForm:{id:"death-loss",name:"Death Loss",description:"Calculates born and exposed death loss rates.",inputs:{femalesExposed:{type:"number",label:"Females Exposed",validators:["required","number","min"],params:{min:1}},numberBorn:{type:"number",label:"Number Born Alive",validators:["required","min"],params:{min:0}},numberLost:{type:"number",label:"Number Lost Before Weaning",validators:["required","min"],params:{min:0}}},outputs:{deathLossBorn:{type:"number",label:"Death Loss (born)",units:"%"},deathLossExposed:{type:"number",label:"Death Loss (exposed)",units:"%"},calculated:{type:"date",label:"Calculated Date"}},calculator:b,messages:{femalesExposed:{required:"Females exposed is required",number:"Females exposed must be a number",min:"Females exposed should be greater than zero"},numberBorn:{required:"Number born is required",number:"Number born must be a number",min:"Number born should be zero or greater."},numberLost:{required:"Number lost is required",number:"Number lost must be a number",min:"Number lost should be zero or greater."}}},weightGainForm:{id:"weight-gain",name:"Weight Gain",description:"Calculates the amount of weight gained based on consumption.",category:"livestock",inputs:{headCount:{type:"number",label:"Head Count",validators:["required","number","min"],params:{min:1}},totalFeedIntake:{type:"number",label:"Total Feed Intake",units:"lbs",validators:["required","number","min"],params:{min:0}},feedConversionRate:{type:"number",label:"Feed Conversion Rate",validators:["required","number","min"],params:{min:1}},startWeight:{type:"number",label:"Starting Weight",units:"lbs",validators:["required","number","min"],params:{min:1}}},outputs:{weightGainPerHead:{type:"number",label:"Weight Gained per Head",units:"lbs"},totalWeightGain:{type:"number",label:"Total Weight Gain",units:"lbs"},endWeight:{type:"number",label:"Ending Weight",units:"lbs"},calculated:{type:"date",label:"Calculated Date"}},calculator:s,messages:{headCount:{required:"Head count is required",number:"Head count must be a number",min:"Head count should be greater than zero"},totalFeedIntake:{required:"Total feed intake is required",number:"Total feed intake must be a number",min:"Total feed intake should be zero or greater."},feedConversionRate:{required:"Feed conversion rate is required",number:"Feed conversion rate must be a number",min:"Feed conversion rate should be greater than zero."},startWeight:{required:"Starting weight is required",number:"Starting weight must be a number",min:"Starting weight should be greater than zero."}},formatters:{feedConversionRate:e=>`${e}:1`},widgets:{weightGainPerHead:{id:"weight-gain-per-head",calculator:"weight-gain"},totalWeightGain:{id:"total-weight-gain",calculator:"weight-gain"}}},birthingSeasonForm:{id:"birthing-season",name:"Birthing Season",description:"Calculates the start and end dates for a birthing season based on a sire turn-out date.",category:"livestock",inputs:{sireTurnOutDate:{type:"date",label:"Sire Turn Out Date",validators:["required","date"],default:()=>new Date},breedingSeasonLength:{type:"number",label:"Breeding Season Length",validators:["required","number","min"],params:{min:1}},gestation:{type:"select",label:"Gestation",validators:["required","min"],params:{min:1},default:283,options:N}},outputs:{birthingSeasonStart:{type:"date",label:"Birthing Season Start"},birthingSeasonEnd:{type:"date",label:"Birthing Season End"},calculated:{type:"date",label:"Calculated Date"}},calculator:g,messages:{sireTurnOutDate:{required:"Sire turn out date is required",date:"Sire turn out date must be a valid date"},breedingSeasonLength:{required:"Breeding season length is required",number:"Breeding season length must be a number",min:"Breeding season length must be greater than zero"},gestation:{required:"Gestation is required",number:"Gestation must be a number",min:"Gestation must be greater than zero"}},formatters:{gestation:e=>j[e]||e},calendar:{birthingSeason:({birthingSeasonStart:e,birthingSeasonEnd:t})=>({subject:"Birthing Season",from:e,to:t})}},weightWeanedForm:{id:"weight-weaned",name:"Weight Weaned",description:"Calculates the amount of weight weaned per female.",category:"livestock",inputs:{totalWeightWeaned:{type:"number",label:"Total Weight Weaned",units:"lbs",validators:["required","number","min"],params:{min:1}},femalesExposed:{type:"number",label:"Number of Exposed Females",validators:["required","number","min"],params:{min:1}}},outputs:{weightWeanedPerFemale:{type:"number",label:"Weight Weaned per Female",units:"lbs"},calculated:{type:"date",label:"Calculated Date"}},calculator:h,messages:{totalWeightWeaned:{required:"Total weight weaned is required",number:"Total weight weaned must be a number",min:"Total weight weaned should be greater than zero"},femalesExposed:{required:"Number of exposed females is required",number:"Number of exposed females must be a number",min:"Number of exposed females should be greater than zero"}}},birthingPercentageForm:{id:"birthing-percentage",name:"Birthing Percentage",description:"Calculates a birthing percentage.",category:"livestock",inputs:{numberBorn:{type:"number",label:"Number Offspring Born",validators:["required","number","min"],params:{min:0}},numberFemalesExposed:{type:"number",label:"Number of Females Exposed",validators:["required","number","min"],params:{min:0}},numberFemalesSoldOrDied:{type:"number",label:"Number of Females Sold or Died",validators:["required","number","min"],params:{min:0}},numberFemalesPurchased:{type:"number",label:"Number of Females Purchased",validators:["required","number","min"],params:{min:0}}},outputs:{birthingPercentage:{type:"number",label:"Birthing Percentage",units:"%"},calculated:{type:"date",label:"Calculated Date"}},calculator:c,messages:{numberBorn:{required:"Number of offspring born is required",number:"Number of offspring born must be a number",min:"Number of offspring born should be zero or greater"},numberFemalesExposed:{required:"Number of females exposed is required",number:"Number of females exposed must be a number",min:"Number of females exposed should be zero or greater"},numberFemalesSoldOrDied:{required:"Number of females sold or died is required",number:"Number of females sold or died must be a number",min:"Number of females sold or died should be zero or greater"},numberFemalesPurchased:{required:"Number of females purchased is required",number:"Number of females purchased must be a number",min:"Number of females purchased should be zero or greater"}}},weaningPercentageForm:{id:"weaning-percentage",name:"Weaning Percentage",description:"Calculates a weaning percentage.",category:"livestock",inputs:{numberWeaned:{type:"number",label:"Number of Offspring Weaned",validators:["required","number","min"],params:{min:0}},numberFemalesExposed:{type:"number",label:"Number of Females Exposed",validators:["required","number","min"],params:{min:0}},numberFemalesSoldOrDied:{type:"number",label:"Number of Females Sold or Died",validators:["required","number","min"],params:{min:0}},numberFemalesPurchased:{type:"number",label:"Number of Females Purchased",validators:["required","number","min"],params:{min:0}}},outputs:{weaningPercentage:{type:"number",label:"Weaning Percentage",units:"%"},calculated:{type:"date",label:"Calculated Date"}},calculator:p,messages:{numberWeaned:{required:"Number of offspring weaned is required",number:"Number of offspring weaned must be a number",min:"Number of offspring weaned should be zero or greater"},numberFemalesExposed:{required:"Number of females exposed is required",number:"Number of females exposed must be a number",min:"Number of females exposed should be zero or greater"},numberFemalesSoldOrDied:{required:"Number of females sold or died is required",number:"Number of females sold or died must be a number",min:"Number of females sold or died should be zero or greater"},numberFemalesPurchased:{required:"Number of females purchased is required",number:"Number of females purchased must be a number",min:"Number of females purchased should be zero or greater"}}},cattleReplacementsNeededForm:{id:"cattle-replacements-needed",name:"Cattle Replacements Needed",description:"Calculates the number of replacements required using a replacement rate.",category:"livestock",inputs:{herdSize:{type:"number",label:"Herd Size",validators:["required","number","min"],params:{min:1}},replacementRate:{type:"number",label:"Replacement Rate",units:"%",validators:["required","number","min"],params:{min:0}}},outputs:{averageCowAge:{type:"number",label:"Average Female Age"},replacementsNeeded:{type:"number",label:"Replacements Needed"},calculated:{type:"date",label:"Calculated Date"}},calculator:y,messages:{herdSize:{required:"Herd size is required.",number:"Herd size must be a number",min:"Herd size should be greater than zero."},replacementRate:{required:"Replacement rate is required.",number:"Replacement rate must be a number",min:"Replacement rate should be zero or greater."}}},feedCostForm:{id:"feed-cost",name:"Feed Cost",description:"Calculates the cost of feed per weight and day based on total feed costs.",category:"livestock",inputs:{startWeight:{type:"number",label:"Starting Weight",units:"lbs",validators:["required","number","min"],params:{min:1}},endWeight:{type:"number",label:"Ending Weight",units:"lbs",validators:["required","number","gt"],params:{gt:"startWeight"}},daysOnFeed:{type:"number",label:"Days on Feed",validators:["required","number","min"],params:{min:1}},totalFeedCost:{type:"number",label:"Total Feed Cost",validators:["required","number","min"],params:{min:0}}},outputs:{totalWeightGain:{type:"number",label:"Total Weight Gain",units:"lbs"},averageDailyGain:{type:"number",label:"Average Daily Gain",units:"lbs/day"},feedCostPerWeight:{type:"number",label:"Feed Cost per Weight"},feedCostPerDay:{type:"date",label:"Feed Cost per Day"}},calculator:D,messages:{startWeight:{required:"Starting weight is required",number:"Starting weight must be a number",min:"Starting weight should be greater than zero."},endWeight:{required:"Ending weight is required",number:"Ending weight must be a number",gt:"Ending weight should be greater than the starting weight."},daysOnFeed:{required:"Days on feed is required",number:"Days on feed must be a number",min:"Days on feed should be greater than zero."},totalFeedCost:{required:"Total feed cost is required",number:"Total feed cost must be a number",min:"Total feed cost should be zero or greater."}},formatters:{totalFeedCost:e=>t.formatCurrency(e),feedCostPerWeight:e=>t.formatCurrency(e),feedCostPerDay:e=>t.formatCurrency(e)}}};e.calculators=W,e.forms=C});
