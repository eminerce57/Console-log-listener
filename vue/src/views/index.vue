
<script setup>
import { reactive, ref } from "vue";

const Log =(type)=>{
if(type == "error"){
console.error("this a error")
}else{
  console.log("this a log")
}

}
</script>
<template>
  <div class="body">
    <Card style="width: 65rem">
      <template #title>Click And Log</template>
      <template #content>
        <div class="grid">
          <div class="col-6">
        <Button severity="success" label="Example Log" class="w-full" @click="Log('log')"/>
      </div>
          <div class="col-6">
        <Button severity="danger"  label="Example Error" class="w-full" @click="Log('error')" />
      </div>
      
   
        </div>
       
      
      </template>
      
    </Card>
  </div>
</template>

<style></style>
