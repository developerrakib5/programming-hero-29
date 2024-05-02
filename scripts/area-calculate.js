//  ! First Tringle Area code 
 function calculateTriangleArea (){
    //console.log('Button Clicked');
    // ! Get Triangle Base Value
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // ! Get Triangle Height value 
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // ! Show Tringle Aera
    const areaSpan = document.getElementById("tringle-area");
    areaSpan.innerText = area;

 }


//  ! Second Rectangular Area Code 
 function calculateRectangularArea (){
    //  const RectanArea = Width * Length;
   //  console.log(RectanArea);

   //  const areaSpan2 = document.getElementById("rectangular-area");
   //  areaSpan2.innerText = RectanArea;

   // ! Get Rectangular Width Value 
   const rectangularField = document.getElementById("rectangular-width");
   const widthValueText = rectangularField.value;
   const width = parseFloat(widthValueText);
   console.log(width);

   // ! Get Rectangular Length Value
   const rectangularValueField = document.getElementById("rectangular-length");
   const lengthValueText = rectangularValueField.value;
   const length =  parseFloat(lengthValueText);
   console.log(length);

   // ! Show Rectangular Area 
   const rectangularArea = width * length;
   console.log(rectangularArea);

   addToCalculationEntry ('rectangular',area)
   // ! Result 
   const rectangularSpan = document.getElementById("rectangular-area");
   rectangularSpan.innerText = rectangularArea;

   // Validate Input 
   if (isNaN(width)){
      //console.log('Width is not a number');
      alert('Please Insert A Number');
   }

   // ! Add To Calculation Entry
function addToCalculationEntry (areaType,area){
   console.log('Adding Calculation Soon');
}

 }
 

//  ! Reusable Function ------------------> Reduce Duplicate Code 

// ! Get Paralellogram Base Value
function  paralellogramArea (){
   const paralellogramField = document.getElementById("paralellogram-base");
   const getBaseValueText = paralellogramField.value;
   const base = parseFloat(getBaseValueText);
   console.log(base);

   // ! Get paralellogram Height Value
   const paralellogramValueField = document.getElementById("paralellogram-height");
   const getHeightValueText = paralellogramField.value;
   const height = parseFloat(getHeightValueText);
   console.log(height);

   // ! Show Paralellogram Area 
   const areParalellogram = base * height;
   console.log(areParalellogram);

   // ! Finally Paralellogram Result Input 
   const paralellogramSpan = document.getElementById("paralellogram-area");
   paralellogramSpan.innerText = areParalellogram;

}


// ! Get ellipseArea Value
function ellipseArea(){

   const majorRadious = document.getElementById("ellipse-major-radius");
   const getMajorValue = majorRadious.value;
   const major = parseFloat(getMajorValue);
   console.log(major);

   const minorRadious = document.getElementById("ellipse-minor-radius");
   const getMinorValue = minorRadious.value;
   const minor = parseFloat(getMinorValue);
   console.log(minor);
  
   // ! Show ellipseArea 
   const areEllipse = 3.14 * major * minor;
   console.log(areEllipse);

   // ! Finally ellipseArea  
   const ellipseSpan = document.getElementById("ellipse-area");
   ellipseSpan.innerText = areEllipse;  
}


// ! Data Validation
/*

01.Set The Proper Type Of The Input Field (Number, Data, Email)
02.Check Type
03.isNan Is Cheking The Wether the input is not a number 

*/



