/**
 * @swagger
 * /api/rental:
 *   get:
 *     summary: 대여 물품 확인 [미구현]
 *     description: 사용자가 대여한 물품을 확인합니다.
 *     tags: [Rental - 대여 물품 API]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userRentalItemList:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       itemId:
 *                         type: number
 *                       itemCategory:
 *                         type: string
 *                         enum: [BOOK, BOARD_GAME, OFFICE_SUPPLY, ETC]
 *                       itemName:
 *                         type: string
 *                       dueDate:
 *                         type: string
 *                         format: date
 *                       itemStatus:
 *                         type: string
 *                         enum: ["RENTAL_AVAILABLE", "RENTING", "OVERDUE", "RENTAL_WAITING"]
 *                 penaltyCount:
 *                   type: number
 */

/**
 * @swagger
 * /api/rental:
 *   post:
 *     summary: 물품 대여 [미구현]
 *     description: 사용자가 물품을 대여합니다.
 *     tags: [Rental - 대여 물품 API]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               itemCategory:
 *                 type: string
 *                 enum: ["BOOK", "BOARD_GAME", "OFFICE_SUPPLY", "ETC"]
 *               rentalDate:
 *                 type: string
 *                 format: date
 *               returnDate:
 *                 type: string
 *                 format: date
 *               itemImage:
 *                 type: string
 *                 format: binary
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
 *                   example: "물품대여에 성공하였습니다."
 *       400:
 *         description: 실패
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "물품대여에 실패하였습니다."
 *       404:
 *         description: 실패
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "존재하지 않는 itemId 입니다."
 */

/**
 * @swagger
 * /api/rental/return:
 *   post:
 *     summary: 물품 반납 [미구현]
 *     description: 사용자가 물품을 반납합니다.
 *     tags: [Rental - 대여 물품 API]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               itemId:
 *                 type: number
 *               itemImage:
 *                 type: string
 *                 format: binary
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
 *                   example: "물품반납에 성공하였습니다."
 *       400:
 *         description: 실패
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "물품반납에 실패하였습니다."
 *       404:
 *         description: 실패
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "잘못된 itemId입니다."
 */

/**
 * @swagger
 * /api/rental/itemList:
 *   get:
 *     summary: 물품 목록 조회 [미구현]
 *     description: 사용자가 물품 목록을 확인합니다.
 *     tags: [Rental - 대여 물품 API]
 *     parameters:
 *       - in: query
 *         name: itemCategory
 *         schema:
 *           type: string
 *           enum: [BOOK, BOARD_GAME, OFFICE_SUPPLY, ETC]
 *         description: 아이템 카테고리
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *           default: 0
 *         description: 페이지 번호
 *       - in: query
 *         name: size
 *         schema:
 *           type: number
 *           default: 10
 *         description: 페이지 크기
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalPages:
 *                   type: number
 *                 totalElements:
 *                   type: number
 *                 first:
 *                   type: boolean
 *                 last:
 *                   type: boolean
 *                 size:
 *                   type: number
 *                 number:
 *                   type: number
 *                 numberOfElements:
 *                   type: number
 *                 empty:
 *                   type: boolean
 *                 content:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       itemId:
 *                         type: number
 *                       itemName:
 *                         type: string
 *                       itemCategory:
 *                         type: string
 *                         enum: [BOOK, BOARD_GAME, OFFICE_SUPPLY, ETC]
 *                       itemStatus:
 *                         type: string
 *                         enum: ["RENTAL_AVAILABLE", "RENTING", "OVERDUE", "RENTAL_WAITING"]
 *                 sort:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       direction:
 *                         type: string
 *                       nullHandling:
 *                         type: string
 *                       ascending:
 *                         type: boolean
 *                       property:
 *                         type: string
 *                       ignoreCase:
 *                         type: boolean
 *                 pageable:
 *                   type: object
 *                   properties:
 *                     offset:
 *                       type: number
 *                     paged:
 *                       type: boolean
 *                     pageNumber:
 *                       type: number
 *                     pageSize:
 *                       type: number
 *                     unpaged:
 *                       type: boolean
 *                     sort:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           direction:
 *                             type: string
 *                           nullHandling:
 *                             type: string
 *                           ascending:
 *                             type: boolean
 *                           property:
 *                             type: string
 *                           ignoreCase:
 *                             type: boolean
 */
