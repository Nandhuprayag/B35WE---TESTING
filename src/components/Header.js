import React from "react";
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export default function Header(props)
{
    const {countCartitems}=props
    return(
        <header className="row block center">
            <div>
                <h3>Shopping Cart</h3>
            </div>
            <div >
                <a href="#/">
                    Cart {'  '}
                    {props.countCartitems ?(
                        <IconButton aria-label="cart">
                        <Badge badgeContent={props.countCartitems} color="primary">
                         
                         </Badge>
                      </IconButton>
                    ) :(
                        ''
                    )
                        
                    }
                </a>
                <a href="#/" variant="contained">
                    Sign in
                </a>
            </div>
        </header>
    )
}