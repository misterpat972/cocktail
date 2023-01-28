<template>
    <div>
        <ul>
            <li>
                User 
            </li>
            <li>
                Cocktail 
            </li>
            <li>
                item
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AdminNav'
}
</script>

<style>
    ul {        
        display: block;
        float: left;
        list-style-type: none;
        margin: 0px;
        padding: 40px;
        overflow: hidden;
        background-color: rgba(117, 121, 101, 0.527);
    }
    
    li {        
         /* float: left; */
        border: 1px solid #111;
        background-color: #1db8f5;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        color: white; 
    }
    
    /* li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    
    li a:hover {
        background-color: #111;
    } */
</style>