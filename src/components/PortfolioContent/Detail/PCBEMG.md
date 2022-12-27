## PCB-sEMG

<!-- [![Untitled](/assets/MainPhoto_PCBEMG.jpeg)]((https://www.notion.so/Details-PCB-EMG-3878f8d2a0854c37ab88ce69706fd226)) -->
<img class="aspect-video object-cover rounded-lg hover:scale-102 transition-all duration-500 ease-in-out transform" src="/assets/MainPhoto_PCBEMG.jpeg">


### What

- 비주얼 갤러리
    1. 손에 장착
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f968221a-a4c0-442e-afea-e61d3b4d3c5e/Untitled.jpeg)
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2861aee5-a747-4aa7-ac11-8f1e41f08ac6/Untitled.jpeg)
        
    2. leap hand pose
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77a31b4d-a290-4c4f-b37c-13e5fde4cd06/Untitled.jpeg)
        
    3. 시상식
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d1acf5d4-b124-485b-a227-16695ed66980/Untitled.jpeg)
        

[one sentence summary]

### Why

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f76a3977-94fc-4368-a481-3028691352a9/Untitled.png)

Although electromyography (EMG) is old, it is a technology with a high barrier to entry. Although the HCI functions that can be made possible by using EMG are endless, it is not easy to find online articles dealing with EMG hardware and software development from an engineering point of view, even major books, so developers have to look into the papers themselves. Companies selling medical EMG hardware (i.e., Biometrics Ltd.) are usually expensive and far from open source, and cheap hobbyist-grade hardware (i.e., MyoWare) has poor performance and is also not open source. It is difficult to include in home-made hardware. There is an unmet need from wearable HCI device developers between the two ends of the price spectrum, and this project was launched to address this.

In the Georgia Institute of Technology CREATE-X Idea-to-Prototype class, we won 2nd place out of 40 teams.

### How

It all started with the hypothesis, "Is it possible to mass-manufacture inexpensively with high performance by using a solder pad coated with gold (electroless nickel immersion gold; ENIG) as a surface EMG electrode?" We produced prototypes by manufacturing our own PCB, but due to successive failures, we changed our direction to implement hand pose estimation by making EMG wristbands with commercially available MyoWare hardware. After collecting hand pose-EMG data through the Leap Motion device, an RNN model was trained. Even though the visualization script was completed and there was no actual result, it achieved the result of winning the 2nd prize.