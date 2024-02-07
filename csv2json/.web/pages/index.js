

/** @jsxImportSource @emotion/react */

import { Fragment, useCallback, useContext, useRef } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react"
import { DebounceInput } from "react-debounce-input"
import { EventLoopContext, StateContexts, UploadFilesContext } from "/utils/context"
import { Event, refs, set_val } from "/utils/state"
import "focus-visible/dist/focus-visible"
import ReactDropzone from "react-dropzone"
import NextHead from "next/head"



export function Reactdropzone_2b6cd3aa3ceefcc40c79d0256f4ca0f1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const ref_default = useRef(null); refs['ref_default'] = ref_default;
  const [filesById, setFilesById] = useContext(UploadFilesContext);

  const on_drop_65dafcf47af23567d698a117f4553801 = useCallback(e => setFilesById(filesById => ({...filesById, default: e})), [addEvents, Event, filesById, setFilesById])

  return (
    <ReactDropzone accept={{"application/pdf": [".csv", ".json"]}} id={`default`} maxFiles={5} multiple={true} onDrop={on_drop_65dafcf47af23567d698a117f4553801} ref={ref_default}>
  {({ getRootProps, getInputProps }) => (
    <Box sx={{"border": "1px dotted rgb(107,99,246)", "padding": "2em"}} {...getRootProps()}>
    <Input type={`file`} {...getInputProps()}/>
    <Text>
    {`Drag and drop files here or click to select files`}
  </Text>
  </Box>
  )}
</ReactDropzone>
  )
}

export function Button_35592d3a6343bb1f82ba064dd7c67d7b () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const [filesById, setFilesById] = useContext(UploadFilesContext);

  const on_click_a84cf0d07a4b15df704643bb28623fad = useCallback((_e) => addEvents([Event("state.conversion.csv_to_json", {files:filesById.default,upload_id:`default`}, "uploadFiles")], (_e), {}), [addEvents, Event, filesById, setFilesById])

  return (
    <Button onClick={on_click_a84cf0d07a4b15df704643bb28623fad}>
  {`Convert to JSON`}
</Button>
  )
}

export function Button_c8a27e66a3d11f64496e2678879831c8 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const [filesById, setFilesById] = useContext(UploadFilesContext);

  const on_click_86a193f97483be64e28fdf29ecf2572a = useCallback((_e) => addEvents([Event("state.conversion.user_file", {files:filesById.default,upload_id:`default`}, "uploadFiles")], (_e), {}), [addEvents, Event, filesById, setFilesById])

  return (
    <Button onClick={on_click_86a193f97483be64e28fdf29ecf2572a}>
  {`Upload`}
</Button>
  )
}

export function Debounceinput_8b49aa678c5d437997549c4331fa548c () {
  const state__conversion = useContext(StateContexts.state__conversion)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_664de46c72b66fc9461c91d8db95306d = useCallback((_e0) => addEvents([Event("state.conversion.change_data", {new_data:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_664de46c72b66fc9461c91d8db95306d} sx={{"rows": "6"}} type={`text`} value={state__conversion.user_upload}/>
  )
}

export function Button_bd00290b0ee75c07b9e54b67cde51df6 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ecb6ec9613f5d542d47b0697723fe344 = useCallback((_e) => addEvents([Event("state.conversion.clear", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_ecb6ec9613f5d542d47b0697723fe344}>
  {`Clear`}
</Button>
  )
}

export function Input_b6946a7aacdb2499e943e293d755a0fb () {
  const state__conversion = useContext(StateContexts.state__conversion)


  return (
    <Input sx={{"rows": "6"}} type={`text`} value={state__conversion.user_data}/>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <VStack>
  <HStack>
  <Debounceinput_8b49aa678c5d437997549c4331fa548c/>
  <Input_b6946a7aacdb2499e943e293d755a0fb/>
</HStack>
  <Reactdropzone_2b6cd3aa3ceefcc40c79d0256f4ca0f1/>
  <Button_c8a27e66a3d11f64496e2678879831c8/>
  <HStack>
  <Button_35592d3a6343bb1f82ba064dd7c67d7b/>
</HStack>
  <Button_bd00290b0ee75c07b9e54b67cde51df6/>
</VStack>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
