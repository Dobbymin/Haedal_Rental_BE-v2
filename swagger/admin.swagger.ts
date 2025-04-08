/**
 * @swagger
 * /admin/changeItemStatus:
 *   put:
 *     summary: 물품 상태 변경 [미구현]
 *     description: 관리자가 물품의 상태를 변경합니다.
 *     tags: [Admin - 관리자 물품 관리 API]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 itemStatus:
 *                   type: string
 *                   enum: ["RENTAL_AVAILABLE", "RENTING", "OVERDUE", "RENTAL_WAITING"]
 *                   example: "RENTING"
 *                 itemId:
 *                   type: number
 *                   example: 24
 *       404:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "해당 물품의 id를 찾을 수 없습니다."
 *
 */

/**
 * @swagger
 * /admin/item:
 *   post:
 *     summary: 대여 물품 추가 [미구현]
 *     description: 관리자가 대여 물품을 추가합니다.
 *     tags: [Admin - 관리자 물품 관리 API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemName:
 *                 type: string
 *                 description: 물품의 이름
 *                 example: "자바스크립트 딥다이브"
 *               itemCategory:
 *                 type: string
 *                 enum: [BOOK, BOARD_GAME, OFFICE_SUPPLY, ETC]
 *                 description: 물품의 카테고리
 *                 example: "BOOK"
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "물품이 추가되었습니다."
 */

/**
 * @swagger
 * /admin/item:
 *   delete:
 *     summary: 대여 물품 삭제 [미구현]
 *     description: 관리자가 대여 물품을 삭제합니다.
 *     tags: [Admin - 관리자 물품 관리 API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemId:
 *                 type: number
 *                 description: 삭제할 물품의 ID
 *                 example: 24
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "물품이 정상적으로 삭제되었습니다."
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "해당 물품 삭제에 실패하였습니다."
 *       404:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "해당 물품의 id를 찾을 수 없습니다."
 */

/**
 * @swagger
 * /admin/itemList:
 *   get:
 *     summary: 관리자용 물품 상태별 물품 리스트 조회 [미구현]
 *     description: 관리자가 `itemStatus`에 따라 전체 물품 리스트를 조회합니다.
 *     tags: [Admin - 관리자 물품 관리 API]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   itemCategory:
 *                     type: string
 *                     enum: [BOOK, BOARD_GAME, OFFICE_SUPPLY, ETC]
 *                   itemName:
 *                     type: string
 *                   itemStatus:
 *                     type: string
 *                     enum: ["RENTAL_AVAILABLE", "RENTING", "OVERDUE", "RENTAL_WAITING"]
 *                     example: "RENTING"
 *                   itemId:
 *                     type: number
 *                   returnDate:
 *                     type: string
 *                     format: date
 *                   rentalMemberName:
 *                     type: string
 */

/**
 * @swagger
 * /admin/itemDetail/{itemId}:
 *   get:
 *     summary: 관리자용 물품 상세 조회 [미구현]
 *     description: 관리자가 `itemId`에 따라 물품 상세 정보를 조회합니다.
 *     tags: [Admin - 관리자 물품 관리 API]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: 조회할 물품의 ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rentalMemberName:
 *                   type: string
 *                   example: "김해달"
 *                 rentalMemberPhoneNumber:
 *                   type: string
 *                   example: "010-1234-5678"
 *                 itemName:
 *                   type: string
 *                   example: "모던 리액트 딥다이브"
 *                 itemCategory:
 *                   type: string
 *                   enum: [BOOK, BOARD_GAME, OFFICE_SUPPLY, ETC]
 *                   example: "BOOK"
 *                 rentalDate:
 *                   type: string
 *                   format: date
 *                   example: "2025-03-24"
 *                 returnDate:
 *                   type: string
 *                   format: date
 *                   example: "2025-03-27"
 *                 lastPictureUrl:
 *                   type: string
 *                   format: uri
 *                   example: "https://example.com/item-image.jpg"
 *
 *       404:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "해당 물품의 id를 찾을 수 없습니다."
 */
