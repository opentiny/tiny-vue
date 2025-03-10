<template>
  <div class="process-designer-demo-wrapper">
    <process-designer :getData="getData" v-loading="isLoading" />
  </div>
</template>

<script setup lang="ts">
import { ProcessDesigner, Loading } from '@opentiny/vue'
import { ref } from 'vue'

const vLoading = Loading.directive
const isLoading = ref(false)

const data = ref(`
  <?xml version="1.0" encoding="UTF-8"?>
  <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
      <startEvent id="StartEvent_1y45yut" name="开始">
      <outgoing>SequenceFlow_0h21x7r</outgoing>
      </startEvent>
      <task id="Task_1hcentk">
      <incoming>SequenceFlow_0h21x7r</incoming>
      </task>
      <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
      <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
          <omgdc:Bounds x="152" y="102" width="36" height="36" />
          <bpmndi:BPMNLabel>
          <omgdc:Bounds x="160" y="145" width="22" height="14" />
          </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">
          <omgdc:Bounds x="240" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
          <omgdi:waypoint x="188" y="120" />
          <omgdi:waypoint x="240" y="120" />
      </bpmndi:BPMNEdge>
      </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
  </definitions>
  `)

const getData = () => {
  isLoading.value = true
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      isLoading.value = false
      resolve(data.value)
    }, 2000)
  })
}
</script>

<style>
.process-designer-demo-wrapper {
  width: 100%;
  height: 500px;
}
</style>
