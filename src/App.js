import "./styles.css";
import { ProductDescription } from "./ProductDescription";
import { Box, Grid,Typography } from "@material-ui/core";
import { products } from "./products";
import {useState} from 'react';

export default function App() {

const [ordertotal,setordertotal] = useState(0);

  return (
    <div className="App">
      <h1>Products</h1>
      <Typography >Your order total is {ordertotal}</Typography>
      <Typography >Your order tax is {ordertotal*.08}</Typography>
      
      <Grid container justifyContent="center">
        {products.map((p, i) => (
          <Grid item xs={2} key={i}>
            <ProductDescription {...p} ordertotal={ordertotal} setordertotal={setordertotal}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
