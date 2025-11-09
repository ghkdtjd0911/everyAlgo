신입 개발자 역량 강화를 위한 알고리즘 챌린지: 금융 데이터 편

1. 소개 (Introduction)

1.1. 챌린지의 목적과 개요

이 문서는 신입 개발자들이 교육 과정에서 학습한 핵심 컴퓨터 과학 개념을 실제 문제에 적용하는 능력을 강화하기 위해 설계되었습니다. 본 챌린지는 배열(Array), 연결 리스트(Linked List), 스택(Stack), 큐(Queue) 와 같은 핵심 자료구조와 선택 정렬, 버블 정렬, 병합 정렬(Merge Sort) 및 분할 정복(Divide and Conquer) 패러다임을 활용하여 금융 데이터를 분석하고 처리하는 세 가지 문제를 제시합니다.

각 문제는 실제 금융 분야에서 마주할 수 있는 시나리오를 바탕으로 구성되었습니다. 이 챌린지의 핵심은 단순히 정답을 찾는 것을 넘어, 주어진 제약 조건 내에서 '효율적인' 해결책을 찾는 것의 중요성을 체감하는 데 있습니다. 각 문제에 설정된 시간제한은 비효율적인 알고리즘(예: O(n²))과 효율적인 알고리즘(예: O(n log n) 또는 O(n))의 성능 차이를 명확히 보여주도록 의도적으로 설계되었습니다.

궁극적으로 이 문서를 통해 참가자들은 복잡한 문제를 논리적으로 해결하는 능력뿐만 아니라, 특정 상황에 가장 적합한 자료구조와 알고리즘을 선택하는 분석적 사고 능력을 함양하게 될 것입니다.


--------------------------------------------------------------------------------


2. 난이도 하: 실시간 거래 내역 검증 (Difficulty: Easy - Real-time Transaction Verification)

2.1. 문제 설명

이 문제는 가장 기본적인 선형 자료구조 중 하나인 스택(Stack)의 LIFO(Last-In, First-Out) 원리를 이해하고, 이를 실제 데이터 흐름에 적용할 수 있는지를 평가합니다. 연속된 데이터를 처리하며 가장 최근의 상태를 기준으로 판단해야 하는 상황에서 스택이 얼마나 유용한지를 체험할 수 있습니다.

* 문제 제목: 의심스러운 입출금 내역 찾기
* 시나리오: 한 금융 시스템에서 고객의 입출금 거래 내역이 순서대로 배열로 주어집니다. 입금은 양의 정수로, 출금은 음의 정수로 표현됩니다. 시스템은 연속된 거래 중 비정상적인 패턴을 찾아야 합니다. '비정상적인 패턴'이란, 특정 금액이 입금된 직후 동일한 금액이 출금되는 경우(예: [..., 100, -100, ...])를 의미합니다. 이러한 패턴이 발견되면 해당 두 거래는 서로 상쇄되어 없는 것으로 간주합니다. 모든 거래 내역을 순차적으로 처리한 후, 상쇄되지 않고 최종적으로 남은 거래 내역의 개수를 반환하는 함수를 작성하세요.
* 입력: 거래 내역을 담은 정수 배열 transactions. 각 요소는 0이 아닌 정수입니다.
* 출력: 모든 비정상 패턴을 상쇄하고 남은 거래 내역의 개수 (정수).
* 제약 조건:
  * transactions 배열의 길이는 1 이상 1,000,000 이하입니다.
  * 각 거래 금액의 절댓값은 1 이상 1,000,000,000 이하입니다.
  * 시간 제한: 1초.
* 예시:
  * 입력: [100, -100, 200, 50, -50, -200]
  * 출력: 0 (100과 -100, 50과 -50, 200과 -200이 차례로 상쇄됨)
  * 입력: [100, 200, -100, 300]
  * 출력: 4 (상쇄되는 패턴이 없음)

2.2. 핵심 개념 및 접근 방식

이 문제를 해결하는 데 가장 적합한 자료구조는 스택(Stack) 입니다. 스택은 '마지막에 들어온 요소가 가장 먼저 나가는'(LIFO) 특징을 가지고 있어, "가장 최근의 거래"를 확인해야 하는 이 문제의 요구사항과 완벽하게 일치합니다.

다음과 같은 단계로 접근할 수 있습니다.

1. 순차적 분석: transactions 배열의 첫 번째 거래부터 마지막 거래까지 순서대로 확인합니다.
2. 스택 활용:
  * 스택이 비어있다면, 현재 거래를 스택에 추가(push)합니다.
  * 스택이 비어있지 않다면, 스택의 최상단(peek)에 있는 거래와 현재 거래를 비교합니다.
  * 만약 두 거래가 상쇄되는 패턴(예: stack.peek() == -current_transaction)이라면, 스택의 최상단 요소를 제거(pop)합니다. 이는 두 거래를 모두 시스템에서 제거하는 것과 동일한 효과를 가집니다.
  * 상쇄되지 않는다면, 현재 거래를 스택에 추가(push)합니다.
3. 최종 결과: 모든 거래 내역을 확인한 후 스택에 남아있는 요소의 개수가 바로 상쇄되지 않고 남은 거래의 총 개수입니다.

이 접근 방식의 시간 복잡도는 O(n) 입니다. transactions 배열의 각 요소를 정확히 한 번씩만 확인하며, 각 요소에 대해 스택 연산(push, pop, peek)은 O(1)의 시간이 걸리기 때문입니다. 따라서 배열의 길이가 1,000,000이더라도 제한 시간 1초 내에 충분히 문제를 해결할 수 있습니다.

2.3. Java를 이용한 모범 답안

import java.util.Stack;
import java.util.ArrayDeque;
import java.util.Deque;

/**
 * 신입 개발자 역량 강화를 위한 알고리즘 챌린지
 * 난이도: 하 - 실시간 거래 내역 검증
 */
public class TransactionVerifier {

    /**
     * 의심스러운 입출금 내역을 찾아 상쇄하고 남은 거래 건수를 반환합니다.
     * ArrayDeque를 스택으로 활용하여 성능을 최적화합니다.
     *
     * @param transactions 거래 내역 배열 (입금: 양수, 출금: 음수)
     * @return 상쇄 후 남은 거래의 개수
     */
    public int solution(int[] transactions) {
        // Java에서는 Stack 클래스보다 ArrayDeque를 스택으로 사용하는 것이 성능상 권장됩니다.
        Deque<Integer> stack = new ArrayDeque<>();

        for (int tx : transactions) {
            // 스택이 비어있지 않고, 현재 거래가 스택의 맨 위 거래와 상쇄되는 경우
            // 예: 스택 맨 위가 100이고, 현재 거래가 -100인 경우
            if (!stack.isEmpty() && stack.peek() == -tx) {
                // 상쇄되는 거래이므로 스택에서 제거(pop)합니다.
                stack.pop();
            } else {
                // 상쇄되지 않는 경우, 스택에 현재 거래를 추가(push)합니다.
                stack.push(tx);
            }
        }

        // 모든 거래 처리 후 스택에 남아있는 요소의 개수가 최종 결과입니다.
        return stack.size();
    }
}


2.4. 솔루션 검증을 위한 테스트 코드

아래 코드는 위 solution 메소드의 정확성을 검증하기 위한 테스트 케이스를 포함합니다.

public class Main {
    public static void main(String[] args) {
        TransactionVerifier verifier = new TransactionVerifier();

        // 테스트 케이스 1: 기본 예시
        int[] testCase1 = {100, -100, 200, 50, -50, -200};
        int expected1 = 0;
        int result1 = verifier.solution(testCase1);
        if (result1 == expected1) {
            System.out.println("Test Case 1: Passed");
        } else {
            System.out.println("Test Case 1: Failed. Expected: " + expected1 + ", Got: " + result1);
        }

        // 테스트 케이스 2: 상쇄가 전혀 없는 경우
        int[] testCase2 = {100, 200, -100, 300};
        int expected2 = 4;
        int result2 = verifier.solution(testCase2);
        if (result2 == expected2) {
            System.out.println("Test Case 2: Passed");
        } else {
            System.out.println("Test Case 2: Failed. Expected: " + expected2 + ", Got: " + result2);
        }
        
        // 테스트 케이스 3: 중간에만 상쇄가 일어나는 경우
        int[] testCase3 = {100, 200, -200, -100, 300, 400};
        int expected3 = 2;
        int result3 = verifier.solution(testCase3);
        if (result3 == expected3) {
            System.out.println("Test Case 3: Passed");
        } else {
            System.out.println("Test Case 3: Failed. Expected: " + expected3 + ", Got: " + result3);
        }
        
        // 테스트 케이스 4: 빈 배열이 입력될 경우 (문제 제약조건상 길이는 1 이상이지만, 엣지 케이스 고려)
        int[] testCase4 = {};
        int expected4 = 0;
        int result4 = verifier.solution(testCase4);
        if (result4 == expected4) {
            System.out.println("Test Case 4: Passed");
        } else {
            System.out.println("Test Case 4: Failed. Expected: " + expected4 + ", Got: " + result4);
        }
    }
}


이제 기본적인 자료구조의 활용법을 익혔으니, 다음 문제에서는 순차적인 데이터의 특정 구간을 효율적으로 분석하는 기법을 다뤄보겠습니다.


--------------------------------------------------------------------------------


3. 난이도 중: 특정 기간 내 주식 거래량 분석 (Difficulty: Medium - Stock Trade Volume Analysis in a Specific Period)

3.1. 문제 설명

이 문제는 대량의 순차 데이터에서 특정 구간의 통계를 효율적으로 계산하는 능력을 평가합니다. 큐(Queue) 자료구조의 FIFO(First-In, First-Out) 원리를 응용한 '슬라이딩 윈도우(Sliding Window)' 개념을 구현하는 것이 핵심입니다. 이 기법은 실시간 데이터 스트림 분석, 네트워크 트래픽 모니터링 등 다양한 분야에서 활용됩니다.

* 문제 제목: 슬라이딩 윈도우 최대 거래량 찾기
* 시나리오: 1초 단위로 기록된 주식 거래량 데이터가 시간 순서대로 주어집니다. 당신은 특정 시간 창(window) k초 동안 발생한 거래량의 합계 중 최댓값을 찾아야 합니다. 예를 들어 k=3일 때, 02초, 13초, 2~4초 등 각 3초 구간의 거래량 합을 모두 계산하고 그중 가장 큰 값을 찾아야 합니다.
* 입력:
  * volumes: 1초 단위 거래량을 나타내는 정수 배열
  * k: 시간 창의 크기를 나타내는 정수
* 출력: k초 동안의 최대 거래량 합계 (정수).
* 제약 조건:
  * volumes 배열의 길이는 1 이상 2,000,000 이하입니다.
  * k는 1 이상 volumes 배열의 길이 이하입니다.
  * 각 volume은 0 이상 1,000 이하입니다.
  * 시간 제한: 1.5초.
* 예시:
  * 입력: volumes = [1, 3, 2, 5, 4, 2, 8], k = 3
  * 출력: 14 (구간 [4, 2, 8]의 합이 14로 최대)

3.2. 핵심 개념 및 접근 방식

비효율적인 접근: 중첩 반복문

가장 직관적인 방법은 모든 가능한 윈도우를 순회하며 매번 합계를 새로 계산하는 것입니다.

for i from 0 to (n-k):
  current_sum = 0
  for j from i to (i+k-1):
    current_sum += volumes[j]
  max_sum = max(max_sum, current_sum)


이 방식의 시간 복잡도는 O(n * k) 입니다. volumes의 길이가 2,000,000이고 k가 그에 근접한 값이라면, 연산 횟수는 수조 단위에 달해 명백히 시간제한을 초과합니다.

효율적인 접근: 슬라이딩 윈도우

효율적인 해결책은 윈도우를 한 칸씩 오른쪽으로 이동시킬 때, 합계를 매번 새로 계산하는 대신 O(1) 시간에 갱신하는 것입니다. 이 기법이 바로 '슬라이딩 윈도우'입니다.

1. 초기 윈도우 구성: 먼저 배열의 첫 k개 요소의 합(currentSum)을 계산하고, 이 값을 최대 합계(maxSum)의 초기값으로 설정합니다.
2. 윈도우 슬라이딩:
  * 배열의 k번째 인덱스부터 끝까지 순회합니다.
  * 윈도우를 한 칸 오른쪽으로 이동시킵니다. 이때, 윈도우에서 가장 오래된 데이터(왼쪽 끝)는 합계에서 빼고, 새로 들어오는 데이터(오른쪽 끝)는 합계에 더합니다.
  * currentSum = currentSum - volumes[i-k] + volumes[i]
3. 최대값 갱신: 매 단계마다 갱신된 currentSum을 maxSum과 비교하여 더 큰 값으로 갱신합니다.
4. 최종 결과: 모든 순회가 끝나면 maxSum이 최종 결과가 됩니다.

이 슬라이딩 윈도우 접근법의 시간 복잡도는 O(n) 입니다. 배열을 단 한 번만 순회하기 때문에 대용량 데이터 처리에도 매우 효율적이며, 주어진 시간제한을 충분히 만족시킬 수 있습니다.

3.3. Java를 이용한 모범 답안

/**
 * 신입 개발자 역량 강화를 위한 알고리즘 챌린지
 * 난이도: 중 - 특정 기간 내 주식 거래량 분석
 */
public class StockVolumeAnalyzer {

    /**
     * 슬라이딩 윈도우 기법을 사용하여 주어진 기간(k) 내 최대 거래량을 찾습니다.
     *
     * @param volumes 1초 단위 거래량 배열
     * @param k       시간 창의 크기
     * @return k초 동안의 최대 거래량 합계
     */
    public int solution(int[] volumes, int k) {
        if (volumes == null || volumes.length < k || k <= 0) {
            return 0;
        }

        long currentSum = 0; // 합계가 int 범위를 넘을 수 있으므로 long으로 계산

        // 1. 초기 윈도우(0부터 k-1까지)의 합계를 계산합니다.
        for (int i = 0; i < k; i++) {
            currentSum += volumes[i];
        }

        long maxSum = currentSum;

        // 2. 윈도우를 한 칸씩 오른쪽으로 이동하며 합계를 갱신합니다.
        // i는 윈도우에 새로 추가되는 요소의 인덱스를 가리킵니다.
        for (int i = k; i < volumes.length; i++) {
            // 가장 왼쪽의 오래된 요소를 빼고, 가장 오른쪽의 새 요소를 더합니다.
            // volumes[i-k]는 윈도우를 벗어나는 요소입니다.
            // volumes[i]는 윈도우에 새로 들어오는 요소입니다.
            currentSum = currentSum - volumes[i - k] + volumes[i];
            
            // 3. 최대 합계를 갱신합니다.
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
        
        // 문제의 출력은 int이므로 형변환하여 반환합니다.
        return (int)maxSum;
    }
}


3.4. 솔루션 검증을 위한 테스트 코드

public class Main {
    public static void main(String[] args) {
        StockVolumeAnalyzer analyzer = new StockVolumeAnalyzer();

        // 테스트 케이스 1: 기본 예시
        int[] testCase1 = {1, 3, 2, 5, 4, 2, 8};
        int k1 = 3;
        int expected1 = 14;
        int result1 = analyzer.solution(testCase1, k1);
        if (result1 == expected1) {
            System.out.println("Test Case 1: Passed");
        } else {
            System.out.println("Test Case 1: Failed. Expected: " + expected1 + ", Got: " + result1);
        }

        // 테스트 케이스 2: k가 1인 경우
        int[] testCase2 = {10, 5, 12, 8};
        int k2 = 1;
        int expected2 = 12;
        int result2 = analyzer.solution(testCase2, k2);
        if (result2 == expected2) {
            System.out.println("Test Case 2: Passed");
        } else {
            System.out.println("Test Case 2: Failed. Expected: " + expected2 + ", Got: " + result2);
        }

        // 테스트 케이스 3: k가 배열 전체 길이와 같은 경우
        int[] testCase3 = {1, 2, 3, 4, 5};
        int k3 = 5;
        int expected3 = 15;
        int result3 = analyzer.solution(testCase3, k3);
        if (result3 == expected3) {
            System.out.println("Test Case 3: Passed");
        } else {
            System.out.println("Test Case 3: Failed. Expected: " + expected3 + ", Got: " + result3);
        }
    }
}


슬라이딩 윈도우 기법을 통해 효율적인 데이터 구간 분석을 경험했습니다. 이제 마지막으로, 정렬 알고리즘의 내부 동작을 응용하여 더 복잡한 문제를 해결하는 방법에 도전해 보겠습니다.


--------------------------------------------------------------------------------


4. 난이도 상: 주가 하락 추세 분석 (Difficulty: Hard - Stock Price Drop Trend Analysis)

4.1. 문제 설명

이 문제는 분할 정복(Divide and Conquer) 패러다임의 정수인 병합 정렬(Merge Sort) 알고리즘을 깊이 있게 이해하고 응용하는 능력을 측정합니다. 단순히 데이터를 정렬하는 것을 넘어, 정렬이 이루어지는 '과정' 자체에서 유의미한 정보를 추출해야 합니다. 이 문제를 통해 알고리즘의 내부 로직을 활용한 문제 해결 능력을 기를 수 있습니다.

* 문제 제목: 주가 역전 쌍(Inversion Pair) 개수 구하기
* 시나리오: 한 주식의 일별 종가 데이터가 시간 순서대로 주어졌을 때, '주가 역전'이 총 몇 번 발생했는지 분석하고자 합니다. '주가 역전'이란, 특정 날짜 i의 주가가 그 이후의 날짜 j의 주가보다 높은 경우(prices[i] > prices[j] 이고 i < j)를 의미합니다. 이는 시장의 하락 추세를 정량적으로 나타내는 지표로 사용될 수 있습니다. 모든 '주가 역전 쌍'의 총개수를 계산하는 함수를 작성하세요.
* 입력: 일별 주가를 담은 정수 배열 prices.
* 출력: 전체 '주가 역전 쌍'의 개수 (long 타입).
* 제약 조건:
  * prices 배열의 길이는 1 이상 500,000 이하입니다.
  * 각 주가는 0 이상 1,000,000,000 이하입니다.
  * 시간 제한: 2초.
* 예시:
  * 입력: [8, 4, 2, 1]
  * 출력: 6 (쌍: (8,4), (8,2), (8,1), (4,2), (4,1), (2,1))
  * 입력: [3, 1, 2]
  * 출력: 2 (쌍: (3,1), (3,2))

4.2. 핵심 개념 및 접근 방식

비효율적인 접근: 중첩 반복문

가장 단순한 방법은 중첩 반복문을 사용하여 모든 가능한 (i, j) 쌍을 직접 비교하는 것입니다.

count = 0
for i from 0 to n-2:
  for j from i+1 to n-1:
    if prices[i] > prices[j]:
      count++


이 풀이의 시간 복잡도는 O(n²) 입니다. n이 최대 500,000일 때, 연산 횟수는 약 500,000 * 500,000 = 2,500억 번에 달하므로, 제한 시간 2초 내에 해결하는 것은 불가능합니다.

효율적인 접근: 병합 정렬 응용

이 문제는 분할 정복 전략을 통해 O(n log n) 시간 복잡도로 해결할 수 있습니다. 병합 정렬 알고리즘을 응용하는 것이 핵심입니다.

1. Divide (분할): 주어진 prices 배열을 더 이상 나눌 수 없을 때까지(요소가 1개가 될 때까지) 계속해서 두 개의 하위 배열로 나눕니다.
2. Conquer (정복): 각 하위 배열에 대해 재귀적으로 역전 쌍의 개수를 구합니다.
3. Combine (결합 및 계산): 두 개의 정렬된 하위 배열을 다시 하나의 정렬된 배열로 병합하는 과정에서 역전 쌍을 계산합니다. 이것이 이 문제의 핵심입니다.
  * 왼쪽 하위 배열(L)과 오른쪽 하위 배열(R)을 병합한다고 가정해 봅시다. 두 배열은 이미 재귀 호출을 통해 내부적으로 정렬된 상태입니다.
  * 두 배열을 비교하며 병합할 때, 만약 L[i]가 R[j]보다 크다면(L[i] > R[j]), 이는 '주가 역전'이 발생한 것입니다.
  * 핵심 로직: L과 R 배열은 이미 오름차순으로 정렬된 상태입니다. 두 포인터 i와 j를 이용해 두 배열을 비교하며 병합할 때, 만약 L[i] > R[j]인 상황을 마주쳤다면, 이는 L[i]와 R[j]가 '역전 쌍'을 이룬다는 것을 의미합니다. 여기서 중요한 점은, L 배열이 이미 정렬되어 있기 때문에 L[i] 뒤에 남아있는 모든 요소들(L[i+1], L[i+2], ...)은 L[i]보다 크거나 같다는 것입니다. 따라서 이 요소들 역시 모두 R[j]보다 큽니다. 즉, L 배열에 남아있는 모든 요소들은 R[j]와 '역전 쌍'을 형성합니다. 그러므로 이 한 번의 비교만으로 (왼쪽 배열의 중간 지점 - i + 1) 개수만큼의 역전 쌍을 한 번에 발견하고 카운트에 더할 수 있습니다. 이것이 O(1) 연산으로 여러 개의 역전 쌍을 찾아내는 이 알고리즘의 핵심적인 효율성입니다.

최종적으로 구하는 역전 쌍의 총개수는 (왼쪽 하위 배열의 역전 쌍 개수) + (오른쪽 하위 배열의 역전 쌍 개수) + (병합 과정에서 발견된 역전 쌍 개수)의 합이 됩니다.

4.3. Java를 이용한 모범 답안

/**
 * 신입 개발자 역량 강화를 위한 알고리즘 챌린지
 * 난이도: 상 - 주가 하락 추세 분석
 */
public class InversionCounter {

    /**
     * 병합 정렬을 응용하여 주가 역전 쌍의 총 개수를 계산합니다.
     *
     * @param prices 일별 주가 배열
     * @return 주가 역전 쌍의 총 개수
     */
    public long solution(int[] prices) {
        if (prices == null || prices.length < 2) {
            return 0;
        }
        int[] temp = new int[prices.length];
        return mergeSortAndCount(prices, temp, 0, prices.length - 1);
    }

    /**
     * 재귀적으로 배열을 분할하고, 각 부분의 역전 쌍 개수를 합산합니다.
     */
    private long mergeSortAndCount(int[] arr, int[] temp, int left, int right) {
        long inversionCount = 0;
        if (left < right) {
            int mid = left + (right - left) / 2;

            // 왼쪽 하위 배열의 역전 쌍 개수
            inversionCount += mergeSortAndCount(arr, temp, left, mid);
            // 오른쪽 하위 배열의 역전 쌍 개수
            inversionCount += mergeSortAndCount(arr, temp, mid + 1, right);
            
            // 두 하위 배열을 병합하며 발생하는 역전 쌍 개수
            inversionCount += mergeAndCount(arr, temp, left, mid, right);
        }
        return inversionCount;
    }

    /**
     * 두 하위 배열을 병합하며 역전 쌍을 카운트하는 핵심 로직.
     */
    private long mergeAndCount(int[] arr, int[] temp, int left, int mid, int right) {
        // 임시 배열에 복사
        for (int i = left; i <= right; i++) {
            temp[i] = arr[i];
        }

        int i = left;       // 왼쪽 하위 배열 포인터
        int j = mid + 1;    // 오른쪽 하위 배열 포인터
        int k = left;       // 병합될 메인 배열 포인터
        long inversionCount = 0;

        while (i <= mid && j <= right) {
            if (temp[i] <= temp[j]) {
                arr[k++] = temp[i++];
            } else {
                // *** 핵심 로직 ***
                // temp[i] > temp[j]인 경우, 역전 쌍이 발생합니다.
                // 왼쪽 배열의 i번째 요소는 오른쪽 배열의 j번째 요소보다 큽니다.
                // 왼쪽 배열은 정렬되어 있으므로, i부터 mid까지의 모든 요소들은 temp[j]보다 큽니다.
                // 따라서 (mid - i + 1)개의 역전 쌍이 추가됩니다.
                inversionCount += (mid - i + 1);
                arr[k++] = temp[j++];
            }
        }

        // 남은 요소들 복사
        while (i <= mid) {
            arr[k++] = temp[i++];
        }
        while (j <= right) {
            arr[k++] = temp[j++];
        }

        return inversionCount;
    }
}


4.4. 솔루션 검증을 위한 테스트 코드

public class Main {
    public static void main(String[] args) {
        InversionCounter counter = new InversionCounter();

        // 테스트 케이스 1: 기본 예시
        int[] testCase1 = {8, 4, 2, 1};
        long expected1 = 6L;
        long result1 = counter.solution(testCase1);
        if (result1 == expected1) {
            System.out.println("Test Case 1: Passed");
        } else {
            System.out.println("Test Case 1: Failed. Expected: " + expected1 + ", Got: " + result1);
        }

        // 테스트 케이스 2: 또 다른 기본 예시
        int[] testCase2 = {3, 1, 2};
        long expected2 = 2L;
        long result2 = counter.solution(testCase2);
        if (result2 == expected2) {
            System.out.println("Test Case 2: Passed");
        } else {
            System.out.println("Test Case 2: Failed. Expected: " + expected2 + ", Got: " + result2);
        }

        // 테스트 케이스 3: 이미 정렬된 배열 (역전 쌍 0개)
        int[] testCase3 = {1, 2, 3, 4, 5};
        long expected3 = 0L;
        long result3 = counter.solution(testCase3);
        if (result3 == expected3) {
            System.out.println("Test Case 3: Passed");
        } else {
            System.out.println("Test Case 3: Failed. Expected: " + expected3 + ", Got: " + result3);
        }

        // 테스트 케이스 4: 역순으로 정렬된 배열 (최대 개수의 역전 쌍)
        // n * (n - 1) / 2 = 5 * 4 / 2 = 10
        int[] testCase4 = {5, 4, 3, 2, 1};
        long expected4 = 10L;
        long result4 = counter.solution(testCase4);
        if (result4 == expected4) {
            System.out.println("Test Case 4: Passed");
        } else {
            System.out.println("Test Case 4: Failed. Expected: " + expected4 + ", Got: " + result4);
        }
        
        // 테스트 케이스 5: 중복된 값이 있는 배열
        int[] testCase5 = {2, 4, 1, 3, 5, 2}; // 쌍: (2,1), (4,1), (4,3), (4,2), (3,2), (5,2)
        long expected5 = 6L;
        long result5 = counter.solution(testCase5);
        if (result5 == expected5) {
            System.out.println("Test Case 5: Passed");
        } else {
            System.out.println("Test Case 5: Failed. Expected: " + expected5 + ", Got: " + result5);
        }
    }
}
