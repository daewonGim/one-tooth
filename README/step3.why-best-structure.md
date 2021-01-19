#함수형 기반의 react의 폴더구조는 어때야할까?

'''
#REACT FILES TO REACT FOLDERS
- src/
--- App/
----- index.js
----- test.js
----- style.css
--- List/
----- index.js
----- test.js
----- style.css
----- ListItem/
------- index.js
------- test.js
------- style.css
'''


'''
#TECHNICAL FOLDER SEPARATION
- src/
--- components/
----- App/
------- index.js
------- test.js
------- style.css
----- List/
------- index.js
------- test.js
------- style.css
--- hooks/
----- useClickOutside/
------- index.js
----- useData/
------- index.js
--- context/
----- Session/
------- index.js
--- services/
----- ErrorTracking/
------- index.js
------- test.js
----- Format/
------- Date/
--------- index.js
--------- test.js
------- Currency/
--------- index.js
--------- test.js
'''


'''
#DOMAIN FOLDER SEPARATION
- src/
--- domain/
----- User/
------- Profile/
------- Avatar/
----- Message/
------- MessageItem/
------- MessageList/
----- Payment/
------- PaymentForm/
------- PaymentWizard/
------- services/
--------- Currency/
----------- index.js
----------- test.js
----- Error/
------- ErrorMessage/
------- ErrorBoundary/
------- services/
--------- ErrorTracking/
----------- index.js
----------- test.js
--- components/
--- hooks/
--- context/
--- services/
----- Format/
------- Date/
--------- index.js
--------- test.js
'''

#참고
https://www.robinwieruch.de/react-folder-structure