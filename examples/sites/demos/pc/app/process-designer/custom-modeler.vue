<script lang="ts">
import { ref } from 'vue'
import CustomModeler from './modeler'
import { ProcessDesigner } from '@opentiny/vue'

export default {
  components: {
    ProcessDesigner
  },
  setup() {
    const data = ref(`
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_1y45yut" name="开始">
      <outgoing>SequenceFlow_0h21x7r</outgoing>
    </startEvent>
    <task id="Task_1hcentk" name="审批">
      <incoming>SequenceFlow_0h21x7r</incoming>
      <outgoing>SequenceFlow_06o0wf0</outgoing>
    </task>
    <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
    <task id="Task_13intos" name="下一节点">
      <incoming>SequenceFlow_06o0wf0</incoming>
      <outgoing>SequenceFlow_1oydyx4</outgoing>
    </task>
    <sequenceFlow id="SequenceFlow_06o0wf0" sourceRef="Task_1hcentk" targetRef="Task_13intos" />
    <endEvent id="EndEvent_0aot3cz" name="结束">
      <incoming>SequenceFlow_1oydyx4</incoming>
    </endEvent>
    <sequenceFlow id="SequenceFlow_1oydyx4" sourceRef="Task_13intos" targetRef="EndEvent_0aot3cz" />
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
      <bpmndi:BPMNShape id="Task_13intos_di" bpmnElement="Task_13intos">
        <omgdc:Bounds x="400" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_06o0wf0_di" bpmnElement="SequenceFlow_06o0wf0">
        <omgdi:waypoint x="340" y="120" />
        <omgdi:waypoint x="400" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_0aot3cz_di" bpmnElement="EndEvent_0aot3cz">
        <omgdc:Bounds x="562" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="569" y="145" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1oydyx4_di" bpmnElement="SequenceFlow_1oydyx4">
        <omgdi:waypoint x="500" y="120" />
        <omgdi:waypoint x="562" y="120" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>

`)
    return {
      data,
      CustomModeler
    }
  }
}
</script>

<template>
  <div style="width: 100%; height: 500px">
    <process-designer :modeler="CustomModeler" :data="data" />
  </div>
</template>

<style>
.custom-bpmn .djs-connection .djs-visual {
  stroke-width: 1px !important;
  stroke: #1296db !important;
}

.icon-custom {
  border-radius: 50%;
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-custom-task {
  background-image: url('/static/images/process-designer/rules.png');
}

.icon-custom-businessRule {
  background-image: url('/static/images/process-designer/variable.png');
}

.icon-custom-exclusive-gateway {
  background-image: url('/static/images/process-designer/decision.png');
}

.icon-custom-data {
  background-image: url('/static/images/process-designer/score.png');
}

.icon-custom-start {
  background-image: url('/static/images/process-designer/start.png');
}

.icon-custom-end {
  background-image: url('/static/images/process-designer/end.png');
}

.icon-custom-flow {
  background-image: url('/static/images/process-designer/flow.png');
}

.icon-custom-edit {
  background-image: url('/static/images/process-designer/edit.png');
}

.icon-custom-delete {
  background-image: url('/static/images/process-designer/delete.png');
}
</style>
