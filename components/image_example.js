import React, { Component } from 'react'
import { View, Image } from 'react-native'

const ImagesExample = ({image}) => (
   <Image source = {{uri:image}}
   style = {{ width: 200, height: 200 }}
   />
)
export default ImagesExample