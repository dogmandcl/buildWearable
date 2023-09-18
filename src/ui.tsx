import {
  AvatarAnchorPointType,
  AvatarAttach,
  engine,
  executeTask,
  TextShape,
  Transform,
} from '@dcl/sdk/ecs'
import { Color4, Vector3 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { createPText, createLtext, createBAtext,createBKtext,createDtext,createNtext, createMCtext, createMtext, createSHtext, createSItext, createBtext, createRtext, createLAtext, createSYtext, createJtext } from './factory'

export let Fselect = true

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
const SIText = engine.addEntity()
TextShape.create(SIText, { text: "", fontSize: 1.5, textColor: Color4.Teal(), outlineColor: Color4.Black(), outlineWidth: .1})

AvatarAttach.create(SIText,{
  anchorPointId: AvatarAnchorPointType.AAPT_NAME_TAG,
})

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      width: 400,
      height: 230,
      margin: '16px 0 8px 270px',
      padding: 4,
      position: {left: 700 }
    }}
    uiBackground={{ color: Color4.create(0.125, 0.039, 0.62, 0.1) }}
  >
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      uiBackground={{ color: Color4.create(0.58, 0.675, 0.98, .2) }}
    >
      <UiEntity
      uiTransform={{
        width: '100%',
        height: '800%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: {top: 20, left: 0}
      }}
      uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
    ></UiEntity>
      <UiEntity
        uiTransform={{
          width: '100%',
          height: 80,
          margin: { top: '10px', bottom: '10px'},
          position: {bottom: 5}

        
        }}
        uiText={{ value: 'Weathernator 3000', fontSize: 24, color: Color4.Yellow()}}
      />
       <Button
        uiTransform={{ width: 50, height: 2000,  position: {top: -10, left: 15},  alignSelf: 'flex-start'}}
        value='°F/°C'
        variant='primary'
        fontSize={14}
        color={Color4.Green()}
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        onMouseDown={() => {
          console.log(Fselect)
         if(!Fselect){
          Fselect = true;
         }
         else{
          Fselect = false;
         }
        }}
      />
      <Button
        uiTransform={{ width: 100, height: 2000,  position: {top: 40, left: 20},  alignSelf: 'flex-start'}}
        value='Paris'
        variant='primary'
        fontSize={14}
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        onMouseDown={() => {
          createPText(SIText);
        }}
      />
          <Button
        uiTransform={{ width: 100, height: 2000, position: {top: 50, left: 20},   alignSelf: 'flex-start' }}
        value='London'
        variant='primary'
        fontSize={14}
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        onMouseDown={() => {
          createLtext(SIText);
        }}
      />
        <Button
        uiTransform={{ width: 100, height: 2000, position: {top: 60, left: 20},   alignSelf: 'flex-start'}}
        value='NYC'
        variant='primary'
        fontSize={14}
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        onMouseDown={() => {
          createNtext(SIText);
        }}
      />
         <Button
        uiTransform={{ width: 100, height: 2000, position: {top: 70, left: 20},  alignSelf: 'flex-start' }}
        value='Mexico City'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createMCtext(SIText);
        }}
      />
         <Button
        uiTransform={{ width: 100, height: 2000, position: {top: 80, left: 20},  alignSelf: 'flex-start' }}
        value='Moscow'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createMtext(SIText);
        }}
      />
        <Button
        uiTransform={{ width: 100, height: 2000, position: {top: -25, left: 150},  alignSelf: 'flex-start' }}
        value='Shanghai'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createSHtext(SIText);
        }}
      />
        <Button
        uiTransform={{ width: 100, height: 2000, position: {top: -15, left: 150},  alignSelf: 'flex-start' }}
        value='Singapore'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createSItext(SIText);
        }}
      />
       <Button
        uiTransform={{ width: 100, height: 2000, position: {top: -5, left: 150},  alignSelf: 'flex-start'}}
        value='Sydney'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createSYtext(SIText);
        }}
      />
       <Button
        uiTransform={{ width: 100, height: 2000, position: {top: 5, left: 150},  alignSelf: 'flex-start'}}
        value='Berlin'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createBtext(SIText);
        }}
      />
       <Button
        uiTransform={{ width: 100, height: 2000, position: {top: 15, left: 150},  alignSelf: 'flex-start'}}
        value='Johannesburg'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createJtext(SIText);
        }}
      />
       <Button
        uiTransform={{ width: 100, height: 2000, position: {top: -85, left: 280},  alignSelf: 'flex-start'}}
        value='Rome'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createRtext(SIText);
        }}
      />
       <Button
        uiTransform={{ width: 100, height: 2000, position: {top: -75, left: 280},  alignSelf: 'flex-start'}}
        value='Los Angeles'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createLAtext(SIText);
        }}
      />
          <Button
        uiTransform={{ width: 100, height: 2000, position: {top: -65, left: 280},  alignSelf: 'flex-start'}}
        value='Dubai'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createDtext(SIText);
        }}
      />
          <Button
        uiTransform={{ width: 100, height: 2000, position: {top: -55, left: 280},  alignSelf: 'flex-start'}}
        value='Bangkok'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createBKtext(SIText);
        }}
      />
          <Button
        uiTransform={{ width: 100, height: 2000, position: {top: -45, left: 280},  alignSelf: 'flex-start'}}
        value='Buenos Aires'
        variant='primary'
        uiBackground={{ color: Color4.create(0.063, 0.118, 0.31, .5) }}
        fontSize={14}
        onMouseDown={() => {
          createBAtext(SIText);
        }}
      />
    </UiEntity>
  </UiEntity>
)

