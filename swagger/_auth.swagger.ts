/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: 회원가입 [미구현]
 *     description: 회원정보를 입력하여 회원가입을 진행합니다.
 *     tags: [Auth - 회원 인증 API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "회원가입에 성공하였습니다."
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "회원가입에 실패하였습니다."
 *
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: 로그인 [미구현]
 *     description: 아이디와 비밀번호를 입력하여 로그인을 진행합니다.
 *     tags: [Auth - 회원 인증 API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "로그인에 성공하였습니다."
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "로그인에 실패하였습니다."
 *
 */

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: 로그아웃 [미구현]
 *     description: 로그아웃을 진행합니다.
 *     tags: [Auth - 회원 인증 API]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "로그아웃에 성공하였습니다."
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "로그아웃에 실패하였습니다."
 *
 */

/**
 * @swagger
 * /api/auth/refresh:
 *   post:
 *     summary: JWT 재발급 [미구현]
 *     description: 사용자의 토큰을 재발급합니다.
 *     tags: [Auth - 회원 인증 API]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "토큰 재발급에 성공하였습니다."
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "토큰 재발급에 실패하였습니다."
 *
 */

/**
 * @swagger
 * /api/auth/duplicate/phoneNumber:
 *   post:
 *     summary: 휴대폰번호 중복확인 [미구현]
 *     description: 회원가입시 휴대폰번호 중복확인을 진행합니다.
 *     tags: [Auth - 회원 인증 API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "사용할 수 있는 휴대폰번호입니다."
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "휴대폰번호 중복확인에 실패하였습니다."
 *       404:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "이미 사용중인 휴대폰번호입니다."
 *
 */

/**
 * @swagger
 * /api/auth/duplicate/id:
 *   post:
 *     summary: 아이디 중복확인 [미구현]
 *     description: 회원가입시 아이디 중복확인을 진행합니다.
 *     tags: [Auth - 회원 인증 API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "사용할 수 있는 아이디입니다."
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "아이디 중복확인에 실패하였습니다."
 *       404:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "이미 사용중인 아이디입니다."
 *
 */
