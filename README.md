Project Structure
This document provides an overview of the project's folder structure and key files.

Root Directory
api/: Backend code (Flask application).
app.py
: Main entry point for the backend server. Handles API requests and data processing.
requirements.txt
: Python dependencies.
data/: Data files used by the backend.
TLI_FINAL_output.csv: The main dataset containing TLI scores and duration data.
frontend/: Frontend code (React application).
taxiluck-web/: The main React project directory.
Frontend Directory (frontend/taxiluck-web/src)
The source code for the frontend is organized as follows:

api/: API handling logic.
analyzeRoute.ts: Functions to call the backend API (currently using mock data).
components/: Reusable UI components.
Header.tsx: Application header.
RouteForm.tsx: Input form for origin, destination, and time.
TLISection.tsx: Displays the Taxi Luck Index (TLI) and Congestion Index (CI).
TimelineSection.tsx: Displays time-based analysis (past/future slots).
StatsSection.tsx: Displays average distance and cost.
mocks/: Mock data for development and testing.
mockData.ts: Sample data used when the backend is unavailable.
utils/: Utility functions.
tliUtils.ts: Helper functions for TLI color coding and time formatting.
App.tsx: Main application component that orchestrates the layout and state.
types.ts: TypeScript interface definitions for data structures.
main.tsx: Entry point for the React application.
index.css: Global styles and Tailwind CSS directives.

Backend Handover Document
현재 프론트엔드는 Mock Data를 사용하여 UI가 구성되어 있습니다. 백엔드 개발 시 다음 사항을 참고하여 API를 구현해주시면 됩니다.

1. API Endpoint Requirement
프론트엔드에서 호출하는 API 명세는 다음과 같습니다.

URL: http://localhost:5000/analyze (기본 설정, 변경 가능)
Method: GET (현재 
analyzeRoute.ts
 구현 기준)
Query Parameters:
pu_borough: 출발지 (예: "Manhattan")
do_borough: 도착지 (예: "Bronx")
time
: 시간 (24시간제 "HH:mm" 형식, 예: "15:30")
Request Example
GET /analyze?pu_borough=Manhattan&do_borough=Bronx&time=15:30 HTTP/1.1
Host: localhost:5000
2. Response Data Structure (JSON)
백엔드 API는 아래와 같은 JSON 구조를 반환해야 합니다.

{
  "status": "success",
  "current_match": {
    "tli": 1.2,             // Taxi Luck Index (float)
    "avg_duration": 15.5,   // 평균 소요 시간 (분)
    "std_duration": 2.1,    // 표준 편차 (분)
    "time": "14:30:00",     // 기준 시간
    "avg_distance": 12.5,   // 평균 거리 (마일)
    "avg_cost": 15.70       // 평균 비용 (USD)
  },
  "nearest_past": [         // 과거 시간대 데이터 배열
    {
      "tli": 1.1,
      "avg_duration": 16.0,
      "std_duration": 2.0,
      "time": "14:00:00",
      "avg_distance": 12.4,
      "avg_cost": 15.50
    }
    // ...
  ],
  "nearest_future": [       // 미래 시간대 데이터 배열
    {
      "tli": 1.3,
      "avg_duration": 14.5,
      "std_duration": 1.9,
      "time": "14:45:00",
      "avg_distance": 12.3,
      "avg_cost": 15.60
    }
    // ...
  ]
}
3. Frontend Integration Point
백엔드 API가 준비되면 프론트엔드 코드에서 다음 부분을 수정하면 됩니다.

File: 
src/api/analyzeRoute.ts
Action:
MOCK_ANALYSIS_RESPONSE 사용 부분을 주석 처리하거나 삭제합니다.
주석 처리된 fetch 호출 로직을 다시 활성화합니다.
4. Backend Code Location
현재 백엔드 코드는 다음 위치에 있습니다. 이 파일에 위에서 설명한 로직을 추가/수정하여 구현하시면 됩니다.

Path: 
api/app.py
Framework: Flask (Python)
5. Reference Files
src/types.ts
: TypeScript 인터페이스 정의 (
TLIResult
, 
AnalysisResponse
)
src/mocks/mockData.ts
: 현재 사용 중인 Mock Data 예시
