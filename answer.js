// 2번문제
// 지난 시간에 배웠던 객체(object)를 다시 복습해보며, 아래의 조건을 충족하는 객체를 직접 선언해보세요.

const myInfo = {
    name: '김민영',
    age: 27,
    mbti: 'ISFJ',
};

console.log(myInfo.name);
console.log(myInfo.age);
console.log(myInfo.mbti);  // myInfo[mbti] 는 왜 not defined 오류가 나나요??

// ## 3. 홀짝 판별기
// 지난 시간에 배웠던 연산자를 활용하여, 숫자를 입력하면 홀수인지 짝수인지 판별하는 함수를 만들어 보려고 합니다. 다음과 같은 결과값이 나올 수 있도록 코드를 작성해 주세요.

function isOddOrEven(number) {
    if (number % 2 === 1) {
        return '홀수';
    }
    else {
        return '짝수';
    }
}

console.log(isOddOrEven(10)); // 결과값 "짝수";
console.log(isOddOrEven(7)); // 결과값 "홀수";

// ## 4. 계산기 문제

function calculate(num1, opperator, num2) {
    switch (opperator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}

console.log(calculate(3, "+", 6)); // 결과값 9
console.log(calculate(11, "-", 6)); // 결과값 5
console.log(calculate(6, "*", 3)); // 결과값 18
console.log(calculate(15, "/", 3)); // 결과값 5

// ## 5. 평균 점수 구하기 [선택 문제]

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function updateScore() {
    for(let i = 0; i < scores.length; i++) {
        scores[i] = calculate(scores[i], "+", 3);
    }
}

updateScore();
console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]