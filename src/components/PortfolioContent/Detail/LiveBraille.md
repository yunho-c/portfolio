# Details: Live Braille

### What

**Gallery**

1. Version 1 Demo
    <iframe class="w-full aspect-video rounded-xl shadow-xl" src="https://www.youtube.com/embed/j7fZV_u3UVg?rel=0&color=white" title="Live Braille (Real-Time Text Detection & Braille Translation) Demo #1" color="white" frameborder="0" allow="autoplay; clipboard-write; encrypted-media;" allowfullscreen></iframe>
    
2. Version 2 Demo
    <p class="op30">[work in progress]</p>


It is an auxiliary program that recognizes text within the field of view in real time and translates it into Braille or reads it aloud.

### Why

Currently, I feel that software for the visually impaired is divided into extremes. On the one hand, there is a product line optimized for user accessibility, such as Microsoft Seeing AI, which implements easily available functions on common hardware (i.e., smartphones). And on the other side of that, there are products like OrCAM that embodied the latest technologies (wearable form factor, command recognition, scene text detection, interaction through hand tracking, etc.) and gave up economic accessibility (i.e., own hardware & software).

Naturally, many companies started developing with the idea that they would like to develop open source software with a large number of useful features and excellent user experience that can be used immediately as AR glasses, which are already in development, are released in the future.

### How

To speed things up to a level where real-time operation is possible, we use Baidu's Paddle framework and the PaddleOCR library, which enables multi-language scene text detection. Support for translation to Grade I English braille using the PyBraille library. We plan to develop our own multilingual braille translation library in the future. We are overhauling the code with the goal of improving usability through intuitive gestural interactions.

<aside>
<div class="font-semibold leading-10">Keywords:
  <div class="tag-bubble">ONNX</div>
  <div class="tag-bubble">OpenCV</div>
  <div class="tag-bubble">Inference Optimization</div>
  <div class="tag-bubble">Text-to-Speech</div>
</div>
</aside>

### Learn More

[GitHub Repository]